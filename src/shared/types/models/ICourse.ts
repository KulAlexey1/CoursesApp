import { IAuthor } from "@shared/types/models/IAuthor";

export interface ICourse {
    id: number;
    title: string;
    slug: string;
    authorId: number;
    author: IAuthor;
    category: string;
}
