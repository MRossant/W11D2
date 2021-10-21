import React from "react";
import TodoListContainer from "./todos/todo_list_container";
import TodoFormContainer from "./todo_list/todo_form_container";


const App = () => (
    <div>
        <h1>Todos App</h1>
        <TodoListContainer />
        <TodoFormContainer />
    </div>
)

export default App;