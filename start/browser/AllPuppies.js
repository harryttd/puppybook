import React from 'react';
import { Link } from 'react-router';
// import store from './store';

export default class AllPuppies extends React.Component {

  // componentDidMount() {
  //   this.props.onLoadPuppies();
    // console.log(store.getState());
  // }

  render () {
    return (
      <div>
        <ul className="list-unstyled">
          {
            this.props.puppies.map(puppy => {
              return <li key={puppy.id}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>;
            })
          }
        </ul>
      </div>
    );
  }
}
