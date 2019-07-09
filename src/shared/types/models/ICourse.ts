import { IAuthor } from "./IAuthor";
import { IGuidId } from "./IGuidId";

export interface ICourse extends IGuidId {
    name: string;
    author: IAuthor;
}
