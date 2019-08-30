import * as React from "react";
import { ICourses } from "@shared/types/models/ICourses";
import { ICourse } from "@shared/types/models/ICourse";
import { NavLink } from "react-router-dom";

type Props = {
    courses: ICourses;
};

const CourseList: React.FC<Props> = props => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Category</td>
                    <td>Author</td>
                </tr>
            </thead>
            <tbody>
                {props.courses.map((course: ICourse) => (
                    <tr key={course.id} id={"course-" + course.id.toString()}>
                        <td>{course.title}</td>
                        <td>{course.category}</td>
                        <td>{course.author.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CourseList;
