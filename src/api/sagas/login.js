import { auth } from '@firebase/app';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actions from '../actions';

function* loginUser(firebaseApp) {
  try {
    const authProvider = new auth.GoogleAuthProvider();
    authProvider.addScope('profile');
    authProvider.addScope('email');
    authProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const { user: payload } = yield firebaseApp.auth.signInWithPopup(authProvider);
    const { displayName, photoURL, email, uid } = payload;
    const ref = yield firebaseApp.db.collection("users").doc(uid);
    yield ref.set({ displayName, photoURL, email });

    yield put(push('/'));
  } catch (err) {
    console.log(err);
    yield put({ type: actions.LOGIN_USER_FAILED, payload: err });
  }
}

export default function* watchLogin(firebaseApp) {
  yield takeLatest(actions.LOGIN_USER, loginUser, firebaseApp);
}