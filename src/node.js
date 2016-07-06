import collection from './components/collection'
import item from './components/item'
import form from './components/form'
import partial from './components/partial'
import section from './components/section'
import condition from './components/condition'
import text from './components/text'
import dom from './components/dom'

const find = function(collection, value, key = 'id') {
    const found = collection.filter( item => item[key] == value)
    return found.length ? found[0] : null
}

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
const build = function(config, state) {

    // Extract variables from the config object
    const { type, children = [] } = config

    const nodes = children.map(child => find(state.collection.nodes, child))

    switch(type) {
        case 'collection':  return collection(config, nodes, state)
        case 'item':        return item(config, nodes, state)
        case 'condition':   return condition(config, nodes, state)
        case 'form':        return form(config, nodes, state)
        case 'partial':     return partial(config, nodes, state)
        case 'section':     return section(config, nodes, state)
        case 'text':        return text(config, nodes, state)
        default:            return dom(config, nodes, state)
    }
}

export {build, find}