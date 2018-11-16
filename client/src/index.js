import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import React from "react";
import ReactDOM from "react-dom";
import { normalizeInitialState } from "./api/normalize";

console.log("norm", normalizeInitialState());

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("index")
);