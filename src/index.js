import React from 'react';
import ReactDOM from 'react-dom';
import App from './View/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as BRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../src/store/reducer'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BRouter>
      <CssBaseline />
      <App />
    </BRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();