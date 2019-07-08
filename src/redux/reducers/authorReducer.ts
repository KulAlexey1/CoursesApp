import {
    AuthorAction,
    LoadAuthorsSuccess
} from "../../types/redux/AuthorActions";
import initialState from "./initialState";
import { Authors } from "./../../types/author/Authors";
import * as actionTypes from "../actions/actionTypes";

export default function authorReducer(
    state: Authors = initialState.authors,
    action: AuthorAction
): Authors {
    console.log(state);
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return (action as LoadAuthorsSuccess).authors;
        default:
            return state;
    }
}
