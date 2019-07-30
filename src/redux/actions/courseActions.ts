import * as CourseActions from "@shared/types/redux/CourseActions";
import { ICourse } from "@shared/types/models/ICourse";
import { ICourses } from "@shared/types/models/ICourses";
import * as actionTypes from "@resources/actionTypes";

export function loadCourses(courses: ICourses): CourseActions.LoadCourses {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses: []
    };
}

export function createCourse(course: ICourse): CourseActions.CreateCourse {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}
