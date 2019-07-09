import {
    AuthorAction,
    ILoadAuthorsSuccess
} from "../../shared/types/redux/AuthorActions";
import initialAppState from "./initialAppState";
import { IAuthors } from "../../shared/types/models/IAuthors";
import * as actionTypes from "../../resources/actionTypes";

export default function authorReducer(
    state: IAuthors = initialAppState.authors,
    action: AuthorAction
): IAuthors {
    console.log(state);
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return (action as ILoadAuthorsSuccess).authors;
        default:
            return state;
    }
}
