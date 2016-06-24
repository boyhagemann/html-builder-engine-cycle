
export default function rest(state = {}, action) {

    switch(action.type) {

        case "FETCH":
            return Object.assign(state, {status: 'fetch'})

        case "SUCCESS":
            return Object.assign(state, {status: 'success', data: action.payload.body })

        case "FAILURE":
            return Object.assign(state, {status: 'failure'})

        default:
            return state
    }

}
