import { take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import actions from '../actions';
import reducer from '../reducers/crud';

function createSocketChannel(firebase) {
  return eventChannel((emit) => {
    return firebase.auth.onAuthStateChanged(user => emit(user || {}));
  });
}

function* watchLogged(firebase) {
  const socketChannel = yield call(createSocketChannel, firebase);
  while (true) {
    const payload = yield take(socketChannel);
    yield put({
      type: actions.FETCH_ENTITY_SUCCESSFUL,
      meta: {
        entity: 'user',
        reducer,
      },
      payload,
    });
  }
}

export default watchLogged;