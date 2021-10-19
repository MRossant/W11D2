export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

// action creators => send array to reducer
export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos, // todos: todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo, // todo: todo
});

