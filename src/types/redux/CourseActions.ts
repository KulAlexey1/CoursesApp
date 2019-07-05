import { Course } from "../course/Course";
import { Courses } from "../course/Courses";
import { Action } from "./Action";

export interface LoadCourses extends Action {
    courses: Courses;
}

export interface CreateCourse extends Action {
    course: Course;
}

export type CourseAction = LoadCourses | CreateCourse;
