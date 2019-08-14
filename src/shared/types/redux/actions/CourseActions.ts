import { Action } from "redux";
import { ICourse, CourseId } from "@shared/types/models/ICourse";
import * as actionTypes from "@resources/actionTypes";
import { ICourses } from "@shared/types/models/ICourses";

// Load Courses

export interface ILoadCoursesSuccess
    extends Action<typeof actionTypes.LOAD_COURSES_SUCCESS> {
    courses: ICourses;
}

export interface ILoadCoursesFailed
    extends Action<typeof actionTypes.LOAD_COURSES_FAILED> {}

export type LoadCourses = ILoadCoursesSuccess | ILoadCoursesFailed;

// Create Course

export interface ICreateCourseSuccess
    extends Action<typeof actionTypes.CREATE_COURSE_SUCCESS> {
    course: ICourse;
}

export interface ICreateCourseFailed
    extends Action<typeof actionTypes.CREATE_COURSE_FAILED> {}

export type CreateCourse = ICreateCourseSuccess | ICreateCourseFailed;

// Edit Course

export interface IEditCourseSuccess
    extends Action<typeof actionTypes.EDIT_COURSE_SUCCESS> {
    course: ICourse;
}

export interface IEditCourseFailed
    extends Action<typeof actionTypes.EDIT_COURSE_FAILED> {}

export type EditCourse = IEditCourseSuccess | IEditCourseFailed;

// Delete Course

export interface IDeleteCourseSuccess
    extends Action<typeof actionTypes.DELETE_COURSE_SUCCESS> {
    id: CourseId;
}

export interface IDeleteCourseFailed
    extends Action<typeof actionTypes.DELETE_COURSE_FAILED> {}

export type DeleteCourse = IDeleteCourseSuccess | IDeleteCourseFailed;

export type CourseAction =
    | LoadCourses
    | CreateCourse
    | EditCourse
    | DeleteCourse;
