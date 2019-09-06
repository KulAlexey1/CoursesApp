import * as CourseActions from "@shared/types/redux/actions/CourseActions";
import { ICourse, CourseId } from "@shared/types/models/ICourse";
import { ICourses } from "@shared/types/models/ICourses";
import * as actionTypes from "@resources/actionTypes";
import {
    getCourses,
    addCourse,
    updateCourse,
    removeCourse
} from "@api/coursesApi";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IAppState, GetAppState } from "@shared/types/redux/IAppState";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";

export function loadCoursesFailed(): CourseActions.ILoadCoursesFailed {
    return { type: actionTypes.LOAD_COURSES_FAILED };
}

export function loadCoursesSuccess(
    courses: ICourses
): CourseActions.LoadCourses {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}

export function loadCoursesAsync(): ThunkAction<
    void,
    IAppState,
    ExtraArgument,
    CourseActions.LoadCourses
> {
    return function(
        dispatch: ThunkDispatch<
            IAppState,
            ExtraArgument,
            CourseActions.LoadCourses
        >,
        getState: GetAppState,
        extraArgument: ExtraArgument
    ) {
        console.log("getState :", getState());

        getCourses()
            .then(function(courses: ICourses) {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(function(err) {
                dispatch(loadCoursesFailed());
            });
    };
}

export function createCourseSuccess(
    course: ICourse
): CourseActions.CreateCourse {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

export function createCourseFailed(): CourseActions.ICreateCourseFailed {
    return { type: actionTypes.CREATE_COURSE_FAILED };
}

export function editCourseSuccess(
    course: ICourse
): CourseActions.IEditCourseSuccess {
    return { type: actionTypes.EDIT_COURSE_SUCCESS, course: course };
}

export function editCourseFailed(): CourseActions.IEditCourseFailed {
    return { type: actionTypes.EDIT_COURSE_FAILED };
}

export function saveCourseAsync(
    course: ICourse
): ThunkAction<
    Promise<void>,
    IAppState,
    ExtraArgument,
    CourseActions.CreateCourse | CourseActions.EditCourse
> {
    return function(dispatch, getState, extraArgument) {
        if (!course.id) {
            return addCourse(course)
                .then(function(response) {
                    console.log("ADD COURSE " + response);
                    dispatch(createCourseSuccess(course));
                })
                .catch(function(err: Error) {
                    dispatch(createCourseFailed());
                });
        } else {
            return updateCourse(course)
                .then(function(response) {
                    console.log("UPDATE COURSE " + response);
                    dispatch(editCourseSuccess(course));
                })
                .catch(function(err) {
                    dispatch(editCourseFailed());
                });
        }
    };
}

export function deleteCourseSuccess(
    id: CourseId
): CourseActions.IDeleteCourseSuccess {
    return { type: actionTypes.DELETE_COURSE_SUCCESS, id: id };
}

export function deleteCourseFailed(): CourseActions.IDeleteCourseFailed {
    return { type: actionTypes.DELETE_COURSE_FAILED };
}

export function deleteCourseAsync(
    id: CourseId
): ThunkAction<void, IAppState, ExtraArgument, CourseActions.DeleteCourse> {
    return function(dispatch, getState, extraArgument) {
        removeCourse(id)
            .then(function(response) {
                console.log("DELETE COURSE " + response);
                dispatch(deleteCourseSuccess(id));
            })
            .catch(function(err) {
                dispatch(deleteCourseFailed());
            });
    };
}
