import { fork } from 'redux-saga/effects';

import watchLogin from './login';
import watchLogged from './logged';
import watchLogout from './logout';

export default function* rootSaga(firebase) {
  yield fork(watchLogin, firebase);
  yield fork(watchLogged, firebase);
  yield fork(watchLogout, firebase);
}