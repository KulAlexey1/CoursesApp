import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";

function Index() {
    const store = configureStore();

    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    );
}

render(<Index />, document.getElementById("app"));
