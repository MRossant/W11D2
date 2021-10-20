import React, {Component} from "react";
import TodoDetailView from "./todo_detail_view"


class TodoListItem extends Component{
    constructor(props){
        super(props)
        this.state = {detail: false}
        this.flip = this.flip.bind(this);
        this.flipBool = this.flipBool.bind(this);
    }

    flip(e) {
        e.preventDefault();
        let newTodo = this.props.todo
        newTodo.done = newTodo.done ? false : true;
        this.props.receiveTodo(newTodo)
    }

    flipBool(e){
        e.preventDefault();
        this.setState({detail: this.state.detail ? false : true})

    }

    render(){
        return(
            <div>
                <li onClick={this.flipBool }>{this.props.todo.title}</li>
                {/* <button onClick={remove}>Delete</button> */}
                {this.state.detail ? <TodoDetailView /> : ""}
                <button onClick={this.flip}>{this.props.todo.done ? "Undo" : "Done"}</button>
            </div>
        )}
    }


// const TodoListItem = props => {
// // debugger
//     // function remove(e){
//     //     e.preventDefault();
//     //     props.removeTodo(props.todo);
//     // }

//     function flip(e){
//         e.preventDefault();
//         let newTodo = props.todo 
//         newTodo.done = newTodo.done ? false : true;
//         props.receiveTodo(newTodo)
//     }

//     return (
//     <div>
//         <li onClick={}>{props.todo.title}</li>
//         {/* <button onClick={remove}>Delete</button> */}
//         <button onClick={flip}>{props.todo.done ? "Undo" : "Done"}</button>
//     </div>
//     )
// }

export default TodoListItem;