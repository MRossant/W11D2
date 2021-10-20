import React from "react";
import TodoListItem from "../todo_list/todo_list_item";

// export default () => <h3>Todo List goes here!</h3>
const TodoList = props => {
    return (
        <div>
            <h1>Todos List</h1>
            <ul>
                {
                   props.todos.map(
                       todo => <TodoListItem 
                       key={todo.id} 
                       todo={todo} 
                       removeTodo={props.removeTodo} 
                       receiveTodo={props.receiveTodo}
                       /> 
                       ) 
                }
            </ul>
        </div>
    )
}

export default TodoList;