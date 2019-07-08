import { Authors } from "./../../types/author/Authors";
import { Action } from "../../types/redux/Action";

export interface LoadAuthorsSuccess extends Action {
    authors: Authors;
}

export interface LoadAuthorsFailed extends Action {}

export type LoadAuthors = LoadAuthorsSuccess | LoadAuthorsFailed;

export type AuthorAction = LoadAuthors;
