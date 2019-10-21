import { fork } from 'redux-saga/effects';
import watchLogin from './login';
import watchLogged from './logged';
import watchLogout from './logout';
import watchRouter from './router';

export default function* rootSaga(firebase) {
  yield fork(watchLogin, firebase);
  yield fork(watchLogged, firebase);
  yield fork(watchLogout, firebase);
  yield fork(watchRouter, firebase);
}