import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
// export const LOAD_PUPPIES = 'LOAD_PUPPIES';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    puppies
  };
};

export const loadServerPuppies = function () {
  return function (dispatch) {
    axios.get('/api/puppies')
    .then(function (puppies) {
      const action = receivePuppies(puppies);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err);
    });
  };
};
