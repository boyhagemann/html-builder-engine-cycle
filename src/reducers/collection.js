
export default function collection(state = {}, action) {

    switch(action.type) {

        case "SET":
            console.log('SET', action.payload)
            return Object.assign(state, action.payload)

        default:
            return state
    }

}
