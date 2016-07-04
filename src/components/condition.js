import { build } from '../node'
import {Observable} from 'rx'
import Immutable  from 'immutable'

export default function condition(config, state) {

    // Extract variables from the config object
    const { properties, children = []} = config
    const { source, operator, value } = properties

    const current = Immutable.fromJS(state).getIn(source.split('.'))
    let result = null

    switch(operator) {

        case '=':
            result = current == value
            break

        case '>=':
            result = current >= value
            break

        case '>':
            result = current > value
            break

        case '<=':
            result = current <= value
            break

        case '<':
            result = current < value
            break

    }

    if(!result) return

    return children.map( child => build(child, state) )
}