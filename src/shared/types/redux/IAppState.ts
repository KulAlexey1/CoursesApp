import { ICourses } from "@shared/types/models/ICourses";
import { IAuthors } from "@shared/types/models/IAuthors";

export interface IAppState {
    readonly courses: ICourses;
    readonly authors: IAuthors;
}

export type GetAppState = () => IAppState;
