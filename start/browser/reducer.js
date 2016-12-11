import { RECEIVE_PUPPIES } from './action-creators';

export function puppyReducer(state = [], action) {

  switch (action.type) {
    // case RECEIVE_PUPPIES: {
    //
    //   console.log(action);
    //   return action.receivedPuppies;
    // }
    case RECEIVE_PUPPIES: return Object.assign({}, state, {
      allPuppies: action.receivedPuppies
    });

    default: return state;
  }
}
