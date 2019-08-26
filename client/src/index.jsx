import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/configure-store';
import Slothy from './app/components/Slothy';
// import themeApi from "./api/themeApi";
// // import "./styles/root.scss";
// themeApi.initializeTheme();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Slothy />
  </Provider>,
  document.getElementById('index'),
);

export default store;
