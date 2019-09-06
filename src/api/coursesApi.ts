import { api } from "./apiUtils";
import { ICourses } from "@shared/types/models/ICourses";
import HTTPMethod from "http-method-enum";
import { ICourse, CourseId } from "@shared/types/models/ICourse";

export function getCourses(): Promise<ICourses> {
    return api(process.env.API_URL + "/courses");
}

export function getCourse(id: CourseId): Promise<ICourse> {
    return api(process.env.API_URL + "/courses/" + id);
}

export function addCourse(course: ICourse): Promise<ICourse> {
    return api(process.env.API_URL + "/courses/", HTTPMethod.POST, course);
}

export function updateCourse(course: ICourse): Promise<ICourse> {
    return api(
        process.env.API_URL + "/courses/" + course.id,
        HTTPMethod.PUT,
        course
    );
}

export function removeCourse(id: CourseId) {
    return api(process.env.API_URL + "/courses/" + id, HTTPMethod.DELETE);
}
