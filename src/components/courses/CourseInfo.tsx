import * as React from "react";
import { ICourse } from "@shared/types/models/ICourse";
import { NavLink } from "react-router-dom";

type Props = {
    course: ICourse;
};

const CourseInfo: React.FC<Props> = ({ course }) => {
    return (
        <article id={course.slug}>
            <header>
                <h1>{course.title}</h1>
                <h2>{course.category}</h2>
            </header>
            <main>
                <p>{course.authorId}</p>
            </main>
            <footer>
                <NavLink to="/courses" className="nav-link">
                    Back to All
                </NavLink>
            </footer>
        </article>
    );
};

export default CourseInfo;
