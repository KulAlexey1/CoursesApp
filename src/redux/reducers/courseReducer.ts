import {
    CreateCourseSuccess,
    CourseAction,
    LoadCoursesSuccess
} from "../../types/redux/CourseActions";
import { Courses } from "./../../types/course/Courses";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(
    state: Courses = initialState.courses,
    action: CourseAction
): Courses {
    console.log(state);
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return (action as LoadCoursesSuccess).courses;
        case actionTypes.CREATE_COURSE_SUCCESS:
            const course = (action as CreateCourseSuccess).course;
            return { ...state, [course.id]: course };
        default:
            return state;
    }
}
