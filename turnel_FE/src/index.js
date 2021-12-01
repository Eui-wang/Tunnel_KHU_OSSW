import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import {applyMiddleware, createStore} from "redux";
import promiseMiddleware from 'redux-promise-middleware'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
ReactDOM.render(
      <Provider  store={createStoreWithMiddleWare(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
          <App />
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals