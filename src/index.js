import makeStateDriver from "cycle-redux"

import { Observable } from 'rx'
import { run } from "@cycle/core"
import { div, button, p, makeDOMDriver } from "@cycle/dom"
import { makeHTTPDriver } from '@cycle/http'
import { nodes, events } from '../data'
import { build } from './node'
import rootReducer from './reducers'


function main(sources) {

    // Convert the respones into an action stream
    const response$ = sources.HTTP
        .mergeAll()
        .map(response => {
            return {
                type: response.statusCode == 200 ? 'SUCCESS' : 'FAILURE',
                payload: response
            }
        })

    // Convert the events into an action stream
    const event$ = Observable
        .fromArray(events)
        .map( config => {

            // Extract variables from the config object
            const { selector, event, action, key = null, payload = {} } = config

            // Find the element in the DOM and bind the action to the event
            return sources.DOM
              .select(selector)
              .events(event)
              .map(e => ({type: action, key, payload}))
        })
        .mergeAll()

    // Merge all separate actions streams into one
    const action$ = event$.merge(response$)

    // Perform a request only for actions of type FETCH
    const request$ = action$
        .filter(action => action.type == 'FETCH')
        .map(action => action.payload)

    // Create virtual DOM tree.
    const vtree$ = sources.state
        .map( state => build(nodes, state))

    // Return virtual DOM and action stream
    return {
        DOM: vtree$,
        HTTP: request$,
        state: action$
    }


}

run(main, {
    DOM: makeDOMDriver(document.getElementById("app")),
    HTTP: makeHTTPDriver(),
    state: makeStateDriver(rootReducer, {
        counter: {
            1: { count: 22 },
            2: { count: 33 },
        },
    })
})