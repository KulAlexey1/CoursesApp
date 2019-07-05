import { Authors } from "./../../types/author/Authors";
import { Action } from "../../types/redux/Action";

export interface LoadAuthors extends Action {
    authors: Authors;
}

export type AuthorAction = LoadAuthors;
