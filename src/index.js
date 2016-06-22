import makeStateDriver from "cycle-redux"

import { Observable } from 'rx'
import { run } from "@cycle/core"
import { div, button, p, makeDOMDriver } from "@cycle/dom"
import { nodes, events } from '../data'
import { build } from './node'
import rootReducer from './reducers'


function main(sources) {

    // Convert the events into an action stream
    const action$ = Observable
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

    // Create virtual DOM tree.
    const vtree$ = Observable
        .combineLatest(sources.state, action$, (state, action) => ({state, action}))
        .map( ({state, action}) => build(nodes, state))

    // Return virtual DOM and action stream
    return {
        DOM: vtree$,
        state: action$.flatMap( event => event)
    }


}

run(main, {
    DOM: makeDOMDriver(document.getElementById("app")),
    state: makeStateDriver(rootReducer, {
        counter: {
            1: { count: 22 },
            2: { count: 33 },
        },
    })
})