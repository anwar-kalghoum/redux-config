/* eslint react/no-did-mount-set-state: 0 */
import React, { } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
);

const App = () => (
  <Provider store={store}>

<h1>My first redux config</h1>

  </Provider>
);

export default App;
