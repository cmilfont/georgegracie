import { takeLatest, select } from 'redux-saga/effects';
import firebase from 'firebase';

const eventNames = firebase.analytics.EventName;

function* prepareAnalytics(firebaseApp, action) {
  const defaultAnalytics = firebase.analytics();
  const { meta, type, payload: { location } } = action;
  const { email } = yield select(state => state.user);
  
  if (location && location.pathname) {
    yield defaultAnalytics.logEvent(eventNames.PAGE_VIEW, location.pathname);
  } else {
    defaultAnalytics.logEvent(type, {
      event_category: meta && meta.entity,
      value: email,
    });
  }

}

export default function* watchRouter(firebase) {
  yield takeLatest('*', prepareAnalytics, firebase);
}