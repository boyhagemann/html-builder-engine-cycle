export default function router(state = {}, action) {

    switch(action.type) {

        case "URL":
            return Object.assign(state, action.payload)

        default:
            return state
    }

}
