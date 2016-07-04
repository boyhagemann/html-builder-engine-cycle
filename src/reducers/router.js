
export default function router(state = {}, action) {

    switch(action.type) {

        case "URL":
            console.log('URL', action.payload)
            return Object.assign(state, action.payload)

        default:
            return state
    }

}
