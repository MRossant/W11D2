import { connect } from "react-redux";
import { removeTodo } from "../../actions/todos_actions";
import { receiveSteps } from "../../actions/step_actions";

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo)),
    receiveSteps: step => dispatch(receiveSteps(step))
})

export default connect(null, mapDispatchToProps)(TodoDetailView)