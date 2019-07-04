import { AuthorAction } from "./../actions/authorActions";
import { initialState } from "./initialState";
import { Authors } from "./../../types/author/Authors";
import * as actionTypes from "../actions/actionTypes";

export function authorReducer(
    state: Authors = initialState.authors,
    action: AuthorAction
): Authors {
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}

export default authorReducer;
