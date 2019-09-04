import * as React from "react";
import { Switch, Route } from "react-router-dom";
import LeftSidebar from "@components/common/LeftSidebar";
import RightSidebar from "@components/common/RightSidebar";
import HomePage from "@components/home/HomePage";
import CoursesPage from "@components/courses/CoursesPage";
import AboutPage from "@components/about/AboutPage";
import PageNotFoundPage from "@components/errors/PageNotFoundPage";
import ManageCoursePage from "@components/courses/ManageCoursePage";

const Main = () => (
    <main className="row">
        <LeftSidebar />
        <section className="col-sm-6 col-md-8 bg-light">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={PageNotFoundPage} />
            </Switch>
        </section>
        <RightSidebar />
    </main>
);

export default Main;
