import { createSelector } from "reselect";
import { IAppState } from "@shared/types/redux/IAppState";

const selector = (state: IAppState) => state.authors;

export const getAllAuthors = createSelector(
    selector,
    authors => authors
);
