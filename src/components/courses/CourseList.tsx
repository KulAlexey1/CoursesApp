import * as React from "react";
import { ICourses } from "../../shared/types/models/ICourses";
import { ICourse } from "../../shared/types/models/ICourse";

type Props = {
    courses: ICourses;
};

const CourseList: React.FC<Props> = props => {
    return (
        <section>
            {props.courses.map((course: ICourse) => (
                <article key={course.id} id={course.id}>
                    <header>
                        {course.name} {course.author.fullName}
                    </header>
                    <p>text</p>
                </article>
            ))}
        </section>
    );
};

export default CourseList;
