import { createStore } from "redux"
import { applyMiddleware } from "redux";
import { myThunk } from "../middleware/thunk"
import { rootReducer } from "../reducers/root_reducer"


export const configureStore = (preloadedState = {}) =>{
    return createStore(rootReducer, preloadedState, applyMiddleware(myThunk));
}