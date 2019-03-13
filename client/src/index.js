import App from "./components/app/App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import React from "react";
import ReactDOM from "react-dom";
import themeApi from "./api/themeApi";
// import "./styles/root.scss";

themeApi.initializeTheme();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("index")
);