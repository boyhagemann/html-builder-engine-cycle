
export default function collection(state = {}, action) {

    switch(action.type) {

        case "SET":
            return Object.assign(state, action.payload)

        default:
            return state
    }

}
