import React from 'react';
// import store from './store';

export default class AllPuppies extends React.Component {

  // componentDidMount() {
  //   this.props.onLoadPuppies();
    // console.log(store.getState());
  // }

  render () {
    console.log("PROPS", this.props);

    return (
      <div>
        <ul className="list-unstyled">
          {
            this.props.puppies.map(puppy => {
              return <li key={puppy.id}><a href="#">{puppy.name}</a></li>
            })
          }
        </ul>
      </div>
    );
  }
}
