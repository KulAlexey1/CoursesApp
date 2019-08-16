import * as AuthorActions from "@shared/types/redux/actions/AuthorActions";
import * as actionTypes from "@resources/actionTypes";
import { IAuthors } from "@shared/types/models/IAuthors";
import { ThunkAction } from "redux-thunk";
import { IAppState } from "@shared/types/redux/IAppState";
import { ExtraArgument } from "@shared/types/redux/ThunkTypes";
import { getAuthors } from "@api/authorsApi";

export function loadAuthorsSuccess(
    authors: IAuthors
): AuthorActions.ILoadAuthorsSuccess {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthorsFailed(): AuthorActions.ILoadAuthorsFailed {
    return { type: actionTypes.LOAD_AUTHORS_FAILED };
}

export function loadAuthorsAsync(): ThunkAction<
    void,
    IAppState,
    ExtraArgument,
    AuthorActions.LoadAuthors
> {
    return function(dispatch, getState, ExtraArgument) {
        getAuthors()
            .then(function(authors: IAuthors) {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(function(err: Error) {
                dispatch(loadAuthorsFailed());
            });
    };
}
