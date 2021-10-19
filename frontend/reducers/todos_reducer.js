import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todos_actions";

const todosReducer = (state = {}, action) => {
    Object.freeze(state); // makes sure that the state is immutable
    const nextState = Object.assign({}, state); // Makes shallow copy of state
  switch (action.type) {
    // case RECEIVE_TODOS:

    default:
      return state;
  }
};

export default todosReducer;