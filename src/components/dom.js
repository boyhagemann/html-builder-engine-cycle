import { h } from "@cycle/dom"
import { build } from '../node'
import { mapStateToObject } from '../helpers'

export default function dom(config, nodes, state) {

    // Extract variables from the config object
    const { type, id, properties} = mapStateToObject(config, state)

    // Determine what to render inside the element
    const content = nodes.map( child => build(child, state))

    // Build a unique selector for this node.
    // We use this selector to bind the events.
    const selector = type + '#node-' + id

    return h(selector, properties, content)
}