import { build } from '../node'
import {Observable} from 'rx'
import Immutable  from 'immutable'

export default function collection(config, children, state) {

    // Extract variables from the config object
    const { properties } = config
    const { source, alias } = properties

    // Get a part of the entire state
    const target = Immutable.fromJS(state).getIn(source.split('.')).toJS()

    return target.data.map(row => {

        // Merge the row context with the current state
        const context = Immutable.fromJS(state).set(alias, row).toJS()

        return children.map( child => build(child, context))
    })
}