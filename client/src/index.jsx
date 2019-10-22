import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/configure-store';
import App from './app/components/App';
// import themeApi from "./api/themeApi";
// // import "./styles/root.scss";
// themeApi.initializeTheme();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index'),
);

export default store;
