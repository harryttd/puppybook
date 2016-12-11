'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AllPuppiesContainer from './AllPuppiesContainer';

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <AllPuppiesContainer />
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
