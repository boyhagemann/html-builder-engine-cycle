import collection from './components/collection'
import item from './components/item'
import form from './components/form'
import partial from './components/partial'
import section from './components/section'
import condition from './components/condition'
import text from './components/text'
import dom from './components/dom'

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
    const { type } = config

    switch(type) {
        case 'collection':  return collection(config, state)
        case 'item':        return item(config, state)
        case 'condition':   return condition(config, state)
        case 'form':        return form(config, state)
        case 'partial':     return partial(config, state)
        case 'section':     return section(config, state)
        case 'text':        return text(config, state)
        default:            return dom(config, state)
    }
}