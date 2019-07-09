import {
    ICreateCourseSuccess,
    CourseAction,
    ILoadCoursesSuccess
} from "../../shared/types/redux/CourseActions";
import { ICourses } from "../../shared/types/models/ICourses";
import * as actionTypes from "../../resources/actionTypes";
import initialAppState from "./initialAppState";

export default function courseReducer(
    state: ICourses = initialAppState.courses,
    action: CourseAction
): ICourses {
    console.log(state);
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return (action as ILoadCoursesSuccess).courses;
        case actionTypes.CREATE_COURSE_SUCCESS:
            const course = (action as ICreateCourseSuccess).course;
            return { ...state, [course.id]: course };
        default:
            return state;
    }
}
