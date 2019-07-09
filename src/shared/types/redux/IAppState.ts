import { ICourses } from "../models/ICourses";
import { IAuthors } from "../models/IAuthors";

export interface IAppState {
    readonly courses: ICourses;
    readonly authors: IAuthors;
}
