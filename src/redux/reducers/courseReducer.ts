import { CourseAction } from "./../actions/courseActions";
import { Courses } from "./../../types/course/Courses";
import * as actionTypes from "../actions/actionTypes";
import { initialState } from "./initialState";

export function courseReducer(
    state: Courses = initialState.courses,
    action: CourseAction
): Courses {
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}
