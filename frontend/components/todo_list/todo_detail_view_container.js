import { connect } from "react-redux"
import { removeTodo } from "../../actions/todos_actions"

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo))

})

export default connect(null, mapDispatchToProps)(TodoDetailView)