import { api } from "./apiUtils";
import { ICourses } from "@shared/types/models/ICourses";
import HTTPMethod from "http-method-enum";
import { ICourse } from "@shared/types/models/ICourse";

export function getCourses(): Promise<ICourses> {
    return api(process.env.API_URL + "/courses");
}

export function getCourse(slug: string): Promise<ICourse> {
    return api(process.env.API_URL + "/courses/" + slug);
}

export function addCourse(course: ICourse) {
    return api(process.env.API_URL + "/courses/", HTTPMethod.POST, course);
}

export function updateCourse(course: ICourse) {
    return api(
        process.env.API_URL + "/courses/" + course.slug,
        HTTPMethod.PUT,
        course
    );
}

export function removeCourse(slug: string) {
    return api(process.env.API_URL + "/courses/" + slug, HTTPMethod.DELETE);
}
