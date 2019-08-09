import * as CourseActions from "@shared/types/redux/actions/CourseActions";
import { ICourse } from "@shared/types/models/ICourse";
import { ICourses } from "@shared/types/models/ICourses";
import * as actionTypes from "@resources/actionTypes";
import { getCourses } from "@api/coursesApi";
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
    CourseActions.CourseAction
> {
    return function(
        dispatch: ThunkDispatch<
            IAppState,
            ExtraArgument,
            CourseActions.CourseAction
        >,
        getState: GetAppState,
        extraArgument: ExtraArgument
    ) {
        console.log("getState :", getState());

        getCourses().then(function(courses: any) {
            dispatch(loadCoursesSuccess(courses));
        });
    };
}

export function createCourse(course: ICourse): CourseActions.CreateCourse {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}
