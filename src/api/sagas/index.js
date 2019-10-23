import { fork } from 'redux-saga/effects';
import watchLogin from './login';
import watchLogged from './logged';
import watchLogout from './logout';
import watchRouter from './router';
import watchAnalytics from './analytics';

export default function* rootSaga(firebase, analytics) {
  yield fork(watchLogin, firebase,);
  yield fork(watchLogged, firebase);
  yield fork(watchLogout, firebase);
  yield fork(watchRouter, firebase);
  yield fork(watchAnalytics, firebase, analytics);
}