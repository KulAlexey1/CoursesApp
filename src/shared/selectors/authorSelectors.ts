import { createSelector } from "reselect";
import { IAppState } from "@shared/types/redux/IAppState";

const authorsSelector = (state: IAppState) => state.authors;

export const getAuthors = createSelector(
    authorsSelector,
    authors => authors
);
