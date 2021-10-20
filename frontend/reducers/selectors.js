export const allTodos = (state) =>{
    const todoArr = Object.values(state.todos);
    return todoArr;
}

export function stepByTodoId(state, todoId) {
    const stepArr = Object.values(state.steps);
    return stepArr.filter(step => step.todo_id === todoId);
}