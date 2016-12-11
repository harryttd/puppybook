import { RECEIVE_PUPPIES } from './action-creators';

export function puppyReducer(state = { puppies: [] }, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PUPPIES:
      newState.puppies = action.puppies.data;
      break;

    default: return state;
  }

  return newState;
}
