import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapState = state => ({ selectedPuppy: state.selectedPuppy });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(SinglePuppy);
