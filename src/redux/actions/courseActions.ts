import { Courses } from "./../../types/course/Courses";
import { Action } from "./Action";

export type CourseAction = LoadCoursesSuccess;

export interface LoadCoursesSuccess extends Action {
    courses: Courses;
}
