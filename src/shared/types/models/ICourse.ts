import { IAuthor } from "@shared/types/models/IAuthor";

export type CourseId = number;

export interface ICourse {
    id: CourseId;
    title: string;
    slug: string;
    authorId: number;
    author: IAuthor;
    category: string;
}
