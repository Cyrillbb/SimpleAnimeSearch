import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Main from './Components/Main';

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
