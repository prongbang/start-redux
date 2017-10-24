import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
