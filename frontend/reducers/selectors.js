export const allTodos = (state) =>{
    const todoArr = Object.values(state.todos);
    return todoArr;
}