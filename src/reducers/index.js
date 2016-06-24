import { combineReducers } from 'redux'
import counter from './counter'
import rest from './rest'

/**
 * A higher order component that allows multiple components
 * using the same reducer, but store the result in a scope.
 *
 * @param reducer
 * @returns {Function}
 */
function reusable(reducer) {

    return (state = {}, action) => {

        // No key, then just return the result from the original reducer
        if(!action.key) return reducer(state, action)

        // Only get a part of the state, namespaced by the key
        const scope = state[action.key]
        const update = reducer(scope, action)

        // No change? Then do nothing. Otherwise return a new state
        return update === scope ? state : Object.assign(state, { [action.key]: update })
    }
}

const rootReducer = combineReducers({
    counter: reusable(counter),
    rest,
})

export default rootReducer