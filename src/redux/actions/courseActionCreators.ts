import { LoadCoursesSuccess } from "./courseActions";
import { Courses } from "../../types/course/Courses";
import * as actionTypes from "./actionTypes";

export function loadCoursesSuccess(courses: Courses): LoadCoursesSuccess {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}
