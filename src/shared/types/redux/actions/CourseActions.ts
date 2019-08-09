import { Action } from "redux";
import { ICourse } from "@shared/types/models/ICourse";
import * as actionTypes from "@resources/actionTypes";
import { ICourses } from "@shared/types/models/ICourses";

export interface ILoadCoursesSuccess
    extends Action<typeof actionTypes.LOAD_COURSES_SUCCESS> {
    courses: ICourses;
}

export interface ILoadCoursesFailed
    extends Action<typeof actionTypes.LOAD_COURSES_FAILED> {}

export interface ICreateCourseSuccess
    extends Action<typeof actionTypes.CREATE_COURSE_SUCCESS> {
    course: ICourse;
}

export interface ICreateCourseFailed
    extends Action<typeof actionTypes.CREATE_COURSE_FAILED> {}

export type LoadCourses = ILoadCoursesSuccess | ILoadCoursesFailed;

export type CreateCourse = ICreateCourseSuccess | ICreateCourseFailed;

export type CourseAction = LoadCourses | CreateCourse;
