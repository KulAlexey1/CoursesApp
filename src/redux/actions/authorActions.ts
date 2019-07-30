import * as AuthorActions from "@shared/types/redux/AuthorActions";
import * as actionTypes from "@resources/actionTypes";
import { IAuthors } from "@shared/types/models/IAuthors";

export function loadAuthors(authors: IAuthors): AuthorActions.LoadAuthors {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}
