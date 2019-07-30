import { combineReducers } from "redux";
import authors from "@redux/reducers/authorReducer";
import courses from "@redux/reducers/courseReducer";

const rootReducer = combineReducers({
    authors,
    courses
});

export default rootReducer;
