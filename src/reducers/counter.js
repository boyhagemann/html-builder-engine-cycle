
export default function counter(state = {}, action) {

    switch(action.type) {

        case "INCREMENT":
            console.log('INCREMENT', action)
            return Object.assign(state, { count: state.count + action.payload.amount })

        default:
            return state
    }

}
