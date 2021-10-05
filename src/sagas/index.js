import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('https://animechan.vercel.app/api/random')
                        .then(res => res.json(), )
    yield put({ type: "NEWS_RECEIVED", json: json})
}

export function* actionWatcher(){
    yield takeLatest('GET_NEWS', fetchNews)
}
