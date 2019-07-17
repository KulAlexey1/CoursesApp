import { createSelector } from "reselect";
import { IAppState } from "../types/redux/IAppState";

const selector = (state: IAppState) => state.courses;

export const getAllAuthors = createSelector(
    selector,
    authors => authors
);
