import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions"
const initialState = []

export const errorsReducer = (state = initialState, action) =>{
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_ERRORS:
            nextState = {}
            debugger
            action.errors.forEach((error, i) =>{
                nextState[i] = error; 
            });
            return nextState;

        case CLEAR_ERRORS:
            return initialState
        default:
            return state;

    }

    
}