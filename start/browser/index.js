'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import AllPuppiesContainer from './AllPuppiesContainer';

import { loadServerPuppies } from './action-creators';

ReactDOM.render(
    <Provider store={store}>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <Router history={hashHistory}>
            <Route path="/" onEnter={store.dispatch(loadServerPuppies())}>
              <Route path="puppies" component={AllPuppiesContainer} />
              <IndexRoute component={AllPuppiesContainer} />
            </Route>
          </Router>
        </div>
      </div>
    </Provider>,
  document.getElementById('app')
);
