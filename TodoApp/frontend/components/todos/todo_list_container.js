import {connect} from "react-redux"
import TodoList from "./todo_list"
import { allTodos } from "../../reducers/selectors"
import { receiveTodo, receiveTodos, removeTodo, fetchTodos, createTodo } from "../../actions/todos_actions"

const mapStateToProps = state => ({
    todos: allTodos(state)
})

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo))

})

export default connect(mapStateToProps ,mapDispatchToProps)(TodoList)


