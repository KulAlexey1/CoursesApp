import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "@redux/configureStore";
import App from "@components/App";
import "@styles/main.scss";

function Index() {
    //pass initialState here
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
