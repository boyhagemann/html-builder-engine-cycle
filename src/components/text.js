import { mapStateToObject } from '../helpers'

export default function text(config, children, state) {

    // Extract variables from the config object
    const { properties } = config
    const { text } = mapStateToObject(properties, state)

    return text
}