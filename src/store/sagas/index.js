import { all } from 'redux-saga/effects';
import { setUsersTotalCountSaga, setUsersFetch } from '@store/sagas/usersSaga';

export default function* rootSaga() {
  yield all([
    setUsersTotalCountSaga(),
    setUsersFetch()
  ])
}