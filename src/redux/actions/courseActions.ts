import * as CourseActions from "../../types/redux/CourseActions";
import { Course } from "../../types/course/Course";
import { Courses } from "../../types/course/Courses";
import * as actionTypes from "./actionTypes";

export function loadCourses(courses: Courses): CourseActions.LoadCourses {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function createCourse(course: Course): CourseActions.CreateCourse {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}
