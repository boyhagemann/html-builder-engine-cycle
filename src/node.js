import Hogan from 'hogan.js'
import { h } from "@cycle/dom"

/**
 * Recursively build html elements based on the config tree.
 *
 * It will also replace any placeholders in the text with
 * the actual value from the state.
 *
 * @param config
 * @param state
 * @returns {*}
 */
export function build(config, state) {

    // Extract variables from the config object
    const { type, id, text, attributes, children = []} = config

    // Build a unique selector for this node.
    // We use this selector to bind the events.
    const selector = type + '#node-' + id

    // Determine what to render inside the element
    const content = children.length
        ? children.map( child => build(child, state) )
        : Hogan.compile(text).render(state)

    // Build a hyperscript element
    return h(selector, attributes, content)
}