import {Observable} from 'rx'

export function makeHistoryDriver(history) {

    return function () {

        return Observable.create(observer => {
            history.listen(observer.onNext.bind(observer))
        }).startWith(history.getCurrentLocation())
    }
}