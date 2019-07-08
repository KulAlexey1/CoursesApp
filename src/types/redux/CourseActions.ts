import { Course } from "../course/Course";
import { Courses } from "../course/Courses";
import { Action } from "./Action";

export interface LoadCoursesSuccess extends Action {
    courses: Courses;
}

export interface LoadCoursesFailed extends Action {}

export interface CreateCourseSuccess extends Action {
    course: Course;
}

export interface CreateCourseFailed extends Action {}

export type LoadCourses = LoadCoursesSuccess | LoadCoursesFailed;

export type CreateCourse = CreateCourseSuccess | CreateCourseFailed;

export type CourseAction = LoadCourses | CreateCourse;
