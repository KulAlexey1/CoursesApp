import { Action } from "redux";
import * as actionTypes from "@resources/actionTypes";
import { IAuthors } from "@shared/types/models/IAuthors";

export interface ILoadAuthorsSuccess
    extends Action<typeof actionTypes.LOAD_AUTHORS_SUCCESS> {
    authors: IAuthors;
}

export interface ILoadAuthorsFailed
    extends Action<typeof actionTypes.LOAD_AUTHORS_FAILED> {}

export type LoadAuthors = ILoadAuthorsSuccess | ILoadAuthorsFailed;

export type AuthorAction = LoadAuthors;
