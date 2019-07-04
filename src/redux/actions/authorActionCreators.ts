import { LoadAuthorsSuccess } from "./authorActions";
import * as actionTypes from "./actionTypes";
import { Authors } from "../../types/author/Authors";

export function loadAuthorsSuccess(authors: Authors): LoadAuthorsSuccess {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}
