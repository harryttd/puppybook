import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

// import { loadServerPuppies } from './action-creators';

// const hardcodedPuppies = [
//   { id: 1, name: 'Cody' },
//   { id: 2, name: 'Ben' },
//   { id: 3, name: 'Bubba' }
// ];

const mapState = state => ({ puppies: state.allPuppies });
const mapDispatch = {};
  // THIS IS FROM BEFORE WE CALLED loadServerPuppies FROM THE onEnter IN THE ROUTES
// function(dispatch) {
  // return {
  //   onLoadPuppies: function () {
  //     // const action = receivePuppies(hardcodedPuppies);
  //     const action = loadServerPuppies();
  //     dispatch(action);
  //   }
  // };

export default connect(mapState, mapDispatch)(AllPuppies);
