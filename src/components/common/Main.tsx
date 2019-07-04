import * as React from "react";
import { Switch, Route } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import HomePage from "../home/HomePage";
import CoursesPage from "../courses/CoursesPage";
import AboutPage from "../about/AboutPage";
import PageNotFoundPage from "../errors/PageNotFoundPage";

const Main = () => (
    <main className="row">
        <LeftSidebar />
        <article className="col-sm-6 col-md-8 bg-light">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFoundPage} />
            </Switch>
        </article>
        <RightSidebar />
    </main>
);

export default Main;
