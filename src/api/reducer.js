import { LOCATION_CHANGE } from 'connected-react-router';
import { connectRouter } from 'connected-react-router';
//import fights from './data/fights';

export default history => {

  const fn = connectRouter(history);

  const initialState = { 
    user: {},
    fights: [], 
    router: connectRouter(history)
  };
  
  return (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
      return {
        ...state,
        router: fn(action.payload),
      }
    }

    if (action.meta && action.meta.reducer) {
      return action.meta.reducer(state, action);
    }

    return state;
  }
}