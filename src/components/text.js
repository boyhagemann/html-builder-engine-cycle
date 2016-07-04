import Hogan from 'hogan.js'

export default function text(config, state) {

    // Extract variables from the config object
    const { properties, children = []} = config
    const { text } = properties

    return Hogan.compile(text).render(state)
}