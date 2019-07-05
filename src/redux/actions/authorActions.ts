import * as AuthorActions from "../../types/redux/AuthorActions";
import * as actionTypes from "./actionTypes";
import { Authors } from "../../types/author/Authors";

export function loadAuthors(authors: Authors): AuthorActions.LoadAuthors {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}
