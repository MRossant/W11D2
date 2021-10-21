import * as APIUtil from "../util/todo_api_util"


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

export const fetchTodos = () =>{
  return function(dispatch){
    APIUtil.fetchTodos()
      .then(todos => {
        return dispatch(receiveTodos(todos))
      })
  }
}

