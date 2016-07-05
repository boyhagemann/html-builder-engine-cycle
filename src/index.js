
import { Observable } from 'rx'
import { run } from "@cycle/core"
import { div, button, p, makeDOMDriver } from "@cycle/dom"
import { makeHTTPDriver } from '@cycle/http'
import {useQueries, createHashHistory} from 'history'
import { nodes, events } from '../data'
import makeStateDriver from 'cycle-redux'
import { makeHistoryDriver } from './drivers/history'
import rootReducer from './reducers'
import { build } from './node'


function main(sources) {

    // Assume that each store stream has a separate driver/reducer
    // For each store we map

    // Convert the url history into an action stream
    const history$ = sources.history
        .map(location => {
            return {
                type: 'URL',
                payload: location
            }
        })

    // Convert the responses into an action stream
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
    const action$ = event$.merge(response$).merge(history$)

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
    history: makeHistoryDriver(createHashHistory()),
    state: makeStateDriver(rootReducer, {
        rest: {
            data: {}
        },
        collection: {
            nodes,
            products: {
                data: [
                    {
                        title: 'Test1'
                    },
                    {
                        title: 'Test2'
                    },
                ],
            }
        },
        counter: {
            a: { count: 22 },
            b: { count: 33 },
        },
    })
})