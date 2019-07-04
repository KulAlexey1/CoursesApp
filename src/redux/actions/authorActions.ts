import { Authors } from "./../../types/author/Authors";
import { Action } from "./Action";

export type AuthorAction = LoadAuthorsSuccess;

export interface LoadAuthorsSuccess extends Action {
    authors: Authors;
}
