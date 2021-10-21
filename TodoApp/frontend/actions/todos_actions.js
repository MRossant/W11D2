import * as APIUtil from "../util/todo_api_util";
import { receiveErrors } from "./error_actions";
import { errorsReducer } from "../reducers/errors_reducer";


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"


// action creators => send array to reducer
export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos, // todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo, // todo: todo
});

export const removeTodo = (todo) =>({
  type: REMOVE_TODO,
  todo
})

// export const fetchTodos = () =>{
//   return function(dispatch){
//     APIUtil.fetchTodos()
//       .then(todos => {
//         return dispatch(receiveTodos(todos))
//       })
//   }
// }

export const fetchTodos = () => dispatch =>{
  
    return APIUtil.fetchTodos()
      .then(todos => {
        return dispatch(receiveTodos(todos))
      })
  
}

export const createTodo = todo => {
  return dispatch => {
    return APIUtil.createTodo(todo)
      .then(
        todo => dispatch(receiveTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
      )
  }
};


