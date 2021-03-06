import { takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import actions from '../actions';
import reducer from '../reducers/crud';

function* prepareFetchEntities(firebase, action) {
  const { location: { pathname } } = action.payload;

  if(pathname === '/lutador') {
    const fights = yield firebase.db.collection('fights')
      .orderBy('order', 'asc')
      .get();
    const payload = fights.docChanges().map(fight => fight.doc.data());
    yield put({
      type: actions.FETCH_ENTITY_SUCCESSFUL,
      meta: {
        entity: 'fights',
        reducer,
      },
      payload,
    });
  }

}

export default function* watchRouter(firebase) {
  yield takeLatest(LOCATION_CHANGE, prepareFetchEntities, firebase);
}