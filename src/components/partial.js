import { build, find } from '../node'
import Immutable  from 'immutable'

export default function partial(config, children, state) {

    // Extract variables from the config object
    const { assign, node } = config.properties

    // Get the target partial config to render
    const target = find(state.collection.nodes, node)

    // Merge the partial context with the current state
    const context = assign ? Immutable.fromJS(state).mergeDeep(assign).toJS() : {}

    return build(target, context)
}