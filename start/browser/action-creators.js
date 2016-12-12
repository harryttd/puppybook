import axios from 'axios';

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const SELECT_PUPPY = 'SELECT_PUPPY';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    puppies: puppies
  };
};

export const selectedPuppy = function(puppy) {
  return {
    type: SELECT_PUPPY,
    selectedPuppy: puppy
  };
};

export const loadServerPuppies = function () {
  return function (dispatch) {
    axios.get('/api/puppies')
    .then(function (puppies) {
      const action = receivePuppies(puppies.data);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err);
    });
  };
};

// export const loadServerPuppies = function () {
//   return function (dispatch) {
//     fetch('/api/puppies')
//       .then(res => res.json())
//       .then(puppies => {
//         const action = receivePuppies(puppies);
//         dispatch(action);
//       })
//       .catch(err => console.error(err));
//   };
// };

export const loadSinglePuppy = function(id) {
  return function(dispatch) {
    axios.get(`/api/puppies/${id}`)
    .then(function(puppy) {
      const action = selectedPuppy(puppy.data);
      // const msg = new SpeechSynthesisUtterance(puppy.data.name);
      // window.speechSynthesis.speak(msg);
      dispatch(action);
    })
    .catch(function(err) {
      console.error(err);
    });
  };
};
