import Hogan from 'hogan.js'

const mapStateToObject = function(object, state = {}) {

    let data = {}

    Object.keys(object).map(key => {

        // Either recursively map the state or replace the placeholders (only for strings)
        data[key] = typeof object[key] == 'object'
            ? mapStateToObject(object[key], state)
            : typeof object[key] == 'string'
                ? Hogan.compile(object[key]).render(state)
                : object[key]
    })

    return data
}

export {mapStateToObject}