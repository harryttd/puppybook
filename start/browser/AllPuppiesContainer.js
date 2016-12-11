import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

// import { loadServerPuppies } from './action-creators';

// const hardcodedPuppies = [
//   { id: 1, name: 'Cody' },
//   { id: 2, name: 'Ben' },
//   { id: 3, name: 'Bubba' }
// ];

const mapState = function(state) {
  console.log("STATE", state);
  return { puppies: state.puppies };
};

const mapDispatch = function(dispatch) {

  // THIS IS FROM BEFORE WE CALLED loadServerPuppies FROM THE onEnter IN THE ROUTES
  // return {
  //   onLoadPuppies: function () {
  //     // const action = receivePuppies(hardcodedPuppies);
  //     const action = loadServerPuppies();
  //     dispatch(action);
  //   }
  // };
  return {};
};

export default connect(mapState, mapDispatch)(AllPuppies);
