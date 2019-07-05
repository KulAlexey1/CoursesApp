import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
    authorReducer,
    courseReducer
});

export default rootReducer;
