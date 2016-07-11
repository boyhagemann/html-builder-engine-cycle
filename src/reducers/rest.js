export default function rest(state = {}, action) {

    switch(action.type) {

        case "FETCH":
            return Object.assign(state, {status: 'fetch'})

        case "SUCCESS":

            // Find the name of the resource to merge the new state in
            const name = action.payload.request.resource

            // Merge with the current state and return a new state
            return Object.assign(state, {[name]: { data: action.payload.body }})

        case "FAILURE":
            return Object.assign(state, {status: 'failure'})

        default:
            return state
    }

}
