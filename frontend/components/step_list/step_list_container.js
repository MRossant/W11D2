import { connect } from "react-redux";
import { receiveSteps } from "../../actions/step_actions";
import { stepByTodoId } from "../../reducers/selectors";

const mapDispatchToProps = dispatch => ({
    receiveSteps: step => dispatch(receiveSteps(step))
})

const mapStateToProps = (state, otherProps) => {
    const {id} = otherProps
    return {steps: stepByTodoId(state, id)}
}