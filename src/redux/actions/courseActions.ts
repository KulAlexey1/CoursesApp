import * as CourseActions from "@shared/types/redux/actions/CourseActions";
import { ICourse } from "@shared/types/models/ICourse";
import { ICourses } from "@shared/types/models/ICourses";
import * as actionTypes from "@resources/actionTypes";
import { getCourses, addCourse } from "@api/coursesApi";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IAppState, GetAppState } from "@shared/types/redux/IAppState";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";

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

        getCourses().then(function(courses: ICourses) {
            dispatch(loadCoursesSuccess(courses));
        });
    };
}

export function createCourseSuccess(
    course: ICourse
): CourseActions.CreateCourse {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

export function createCourseAsync(
    course: ICourse
): ThunkAction<void, IAppState, ExtraArgument, CourseActions.CreateCourse> {
    return function(
        dispatch: ThunkDispatch<
            IAppState,
            ExtraArgument,
            CourseActions.CreateCourse
        >,
        getState: GetAppState,
        extraArgument: ExtraArgument
    ) {
        addCourse(course)
            .then(function(response) {
                console.log("SUCCESS CREATE COURSE: " + response);
                dispatch(createCourseSuccess(course));
            })
            .catch(function(err: Error) {
                console.log("FAILED CREATE COURSE: " + err);
            });
    };
}
