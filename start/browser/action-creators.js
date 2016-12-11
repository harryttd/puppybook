// export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
//
// export const recievePuppies = puppies => ({ type: RECEIVE_PUPPIES, recievedPuppies: puppies });
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  };
};
