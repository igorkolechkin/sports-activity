import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { samuraiApi } from '@services/requests';
import { setUsersTotalCount, togglePreloader, setUsers } from '@store/actions/usersAction';
import { SET_USERS_FETCH } from '@store/actions/actionTypes';

export function* setUsersTotalCountSaga() {
  try {
    const response = yield call(samuraiApi.getUsers, 1,1);
    yield put(setUsersTotalCount(response.data.totalCount));
  } catch (e) {
    console.log(e)
  }
}

export function* sethUsers (action) {
  const { usersCount = 4, currentPage = 1 } = action.payload;

  try {
    yield put(togglePreloader(true));

    const users = yield call(samuraiApi.getUsers, currentPage, usersCount);
    yield put(setUsers(users.data.items));

    yield put(togglePreloader(false));
  } catch (e) {
    console.log(e)
  }
}

export function* setUsersFetch() {
  yield takeLatest(SET_USERS_FETCH, sethUsers)
}