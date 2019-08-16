import * as React from "react";
import { ICourse } from "@shared/types/models/ICourse";
import { NavLink } from "react-router-dom";

type Props = {
    course: ICourse;
};

const CourseInfo: React.FC<Props> = ({ course }) => {
    return (
        <article id={"course-" + course.id.toString()}>
            <header>
                <h1>{course.title}</h1>
                <h2>{course.category}</h2>
                <h2 id={"courseAuthor-" + course.authorId}>
                    {course.author.name}
                </h2>
            </header>
            <footer>
                <NavLink to="/courses" className="nav-link">
                    Back to All
                </NavLink>
            </footer>
        </article>
    );
};

export default CourseInfo;
