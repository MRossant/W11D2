import TodoForm from "./todo_form";
import {connect} from "react-redux";
import { receiveTodo, removeTodo, createTodo } from "../../actions/todos_actions";

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    createTodo: todo => dispatch(createTodo(todo))

})

export default connect(null, mapDispatchToProps)(TodoForm);
