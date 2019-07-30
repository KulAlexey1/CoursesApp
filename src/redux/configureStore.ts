import { createStore, applyMiddleware, compose, Store } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "@redux/reducers";
import { IAppState } from "@shared/types/redux/IAppState";
import initState from "@redux/reducers/initialAppState";

export default function configureStore(
    initialState: IAppState = initState
): Store<IAppState> {
    const composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
