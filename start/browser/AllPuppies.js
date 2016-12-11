import React from 'react';

export default class AllPuppies extends React.Component {

  componentDidMount() {
    this.props.onLoadPuppies();
  }

  render () {
    console.log("PROPS", this.props.puppies.allPuppies);
    // const x = this.props.puppies.allPuppies;
    // console.log(x);
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
