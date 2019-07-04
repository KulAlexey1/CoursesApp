import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";

function Index() {
    return (
        <Router>
            <App />
        </Router>
    );
}

render(<Index />, document.getElementById("app"));
