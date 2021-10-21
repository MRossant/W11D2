import TodoForm from "./todo_form";
import {connect} from "react-redux";
import { receiveTodo, removeTodo } from "../../actions/todos_actions";

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
})

export default connect(null, mapDispatchToProps)(TodoForm);
