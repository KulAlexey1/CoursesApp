import { IAuthor } from "@shared/types/models/IAuthor";
import { IGuidId } from "@shared/types/models/IGuidId";

export interface ICourse extends IGuidId {
    name: string;
    author: IAuthor;
}
