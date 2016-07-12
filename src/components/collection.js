import { build } from '../node'
import {Observable} from 'rx'
import Immutable  from 'immutable'
import { mapStateToObject } from '../helpers'

export default function collection(config, children, state) {

    // Extract variables from the config object
    const { properties } = config

    // Replace placeholders with actual state data
    const { source, alias } = mapStateToObject(properties, state)

    // Get a part of the entire state
    const target = Immutable.fromJS(state).getIn(source.split('.'))

    // We must have target data for the collection
    const data = (target && target.toJS().data) || []

    return data.map(row => {

        // Merge the row context with the current state
        const context = Immutable.fromJS(state).set(alias, row).toJS()

        return children.map( child => build(child, context))
    })
}