import actions from '../actions';

export default (state, action) => {
  if (actions.FETCH_ENTITY_SUCCESSFUL === action.type) {
    return {
      ...state,
      [action.meta.entity]: action.payload,
    };
  }

  return state;
}