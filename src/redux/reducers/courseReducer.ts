import {
    ICreateCourseSuccess,
    CourseAction,
    ILoadCoursesSuccess,
    IEditCourseSuccess,
    IDeleteCourseSuccess
} from "@shared/types/redux/actions/CourseActions";
import { ICourses } from "@shared/types/models/ICourses";
import * as actionTypes from "@resources/actionTypes";
import initialAppState from "@redux/reducers/initialAppState";
import { ICourse } from "@shared/types/models/ICourse";

export default function courseReducer(
    state: ICourses = initialAppState.courses,
    action: CourseAction
): ICourses {
    console.log(state);
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS: {
            return (action as ILoadCoursesSuccess).courses;
        }
        case actionTypes.CREATE_COURSE_SUCCESS: {
            const createdCourse = (action as ICreateCourseSuccess).course;
            return [...state, createdCourse];
        }
        case actionTypes.EDIT_COURSE_SUCCESS: {
            const editedCourse = (action as IEditCourseSuccess).course;
            const newCourses: ICourses = state.map(function(course: ICourse) {
                if (course.id !== editedCourse.id) {
                    return course;
                } else {
                    return editedCourse;
                }
            });

            return newCourses;
        }
        case actionTypes.DELETE_COURSE_SUCCESS: {
            const deletedCourseId = (action as IDeleteCourseSuccess).id;
            const newCourses = state.filter(
                course => course.id !== deletedCourseId
            );

            return newCourses;
        }
        default: {
            return state;
        }
    }
}
