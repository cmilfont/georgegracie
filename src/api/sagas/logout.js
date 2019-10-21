import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actions from '../actions';

function* prepareLogout(firebase) {
  yield firebase.auth.signOut();
  yield put(push('/login'));
}

export default function* watchLogout(firebase) {
  yield takeLatest(actions.LOGOUT_USER, prepareLogout, firebase);
}