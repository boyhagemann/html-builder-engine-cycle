import makeStateDriver from "cycle-redux"
import { run } from "@cycle/core"
import { div, button, p, makeDOMDriver } from "@cycle/dom"

// This is a reducer
function counter(state = 0, action) {

    switch(action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }

}

function main(sources) {

    // Create increment action stream.
    const increment$ = sources.DOM
        .select(".increment")
        .events("click")
        .map(e => ({type: "INCREMENT"}))

    // Create decrement action stream.
    const decrement$ = sources.DOM
        .select(".decrement")
        .events("click")
        .map(e => ({type: "DECREMENT"}))


    // Merge the two action streams.
    const action$ = increment$.merge(decrement$)


    // Create virtual DOM tree.
    const vtree$ = sources.state
        .map(count => (
        div([
            button(".decrement", "Decrement"),
            button(".increment", "Increment"),
            p("Counter: " + count)
        ])

    ))

    // Return virtual DOM and action stream
    return {
        DOM: vtree$,
        state: action$
    }

}

run(main, {
    DOM: makeDOMDriver(document.getElementById("app")),
    state: makeStateDriver(counter, 1)
})