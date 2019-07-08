import { Courses } from "../course/Courses";
import { Authors } from "../author/Authors";

export interface State {
    courses: Courses;
    authors: Authors;
}
