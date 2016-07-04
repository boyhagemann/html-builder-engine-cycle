import {Observable} from 'rx'

export function makeStateDriver(stores, reducers) {


    //const state = reducer(initialState, { type: null })

    return action$ => {

        stores.map(store => {

            const reducer = reducers[store.driver]

            const store$ = Observable
                .create(observer => {
                    observer.onNext(0)
                })
                .startWith(store.data)
                .map(action => reducer(state, action))

            action$.merge(store$)
        })

        return action$.mergeAll()
    }
}