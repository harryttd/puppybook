'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';

import { loadServerPuppies,  loadSinglePuppy } from './action-creators';

const onSinglePuppyEnter = function (nextRouterState) {
  console.log(nextRouterState);
  const thunk = loadSinglePuppy(nextRouterState.params.puppyId);
  store.dispatch(thunk);
};

ReactDOM.render(
    <Provider store={store}>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <Router history={hashHistory}>
            <Route path="/">
              <Route path="puppies" component={AllPuppiesContainer} onEnter={store.dispatch(loadServerPuppies())}/>
              <Route path="/puppies/:puppyId" component={SinglePuppyContainer} onEnter={onSinglePuppyEnter}/>
              <IndexRoute component={AllPuppiesContainer} />
            </Route>
          </Router>
        </div>
      </div>
    </Provider>,
  document.getElementById('app')
);
