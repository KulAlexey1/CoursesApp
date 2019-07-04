import { Author } from "./../author/Author";
import { GuidId } from "../shared/GuidId";

export interface Course extends GuidId {
    name: string;
    author: Author;
}
