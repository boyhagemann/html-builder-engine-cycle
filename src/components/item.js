import { build } from '../node'
import {Observable} from 'rx'
import Immutable  from 'immutable'

export default function item(config, children, state) {

    // Extract variables from the config object
    const { type, id, text, properties } = config
    const { source, alias } = properties

    // Get a part of the entire state
    const target = Immutable.fromJS(state).getIn(source.split('.')).toJS()

    // Check if we need to alias the store
    const context = alias
        ? Immutable.fromJS(state).set(alias, target).toJS()
        : state

    return children.map( child => build(child, context) )
}