import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
const store = configureStore();
store.subscribe(() => {
  console.log("store", store.getState())
})
const ele = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));


