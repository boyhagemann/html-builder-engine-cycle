import Hogan from 'hogan.js'

export default function text(config, children, state) {

    // Extract variables from the config object
    const { properties } = config
    const { text } = properties

    console.log(text)
    console.log(state)
    console.log(Hogan.compile(text).render(state))

    return Hogan.compile(text).render(state)
}