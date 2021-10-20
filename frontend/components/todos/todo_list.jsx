import React from "react"

// export default () => <h3>Todo List goes here!</h3>
const TodoList = props => {
    return (
        <div>
            <h1>Todos List</h1>
            <ul>
                {
                   props.todos.map(todo => <li key={todo.id}>{todo.title}</li> ) 
                }
            </ul>
        </div>
    )
}

export default TodoList;