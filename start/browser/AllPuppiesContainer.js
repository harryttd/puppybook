import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';

import { receivePuppies } from './action-creators';

const hardcodedPuppies = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapState = function(state, props) {
  console.log("STATE", state, " --- OWN PROPS", props);
  return { puppies: state };
};


const mapDispatch = function (dispatch) {
  return {
    onLoadPuppies: function () {
      const action = receivePuppies(hardcodedPuppies);
      console.log("ACTION", action);
      dispatch(action);
    }
  };
};

export default connect(mapState, mapDispatch)(AllPuppies);
