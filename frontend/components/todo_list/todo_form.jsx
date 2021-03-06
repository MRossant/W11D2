import { uniqueId } from "../../util/api_util";
import React, {Component} from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({title: e.target.value});
    }

    updateBody(e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: '',
            body: '',
            done: false
        })
    }


    render(){
        return(
           <form onSubmit={this.handleSubmit}>
               <h1>Add Todo</h1>
               <label>Title
                   <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.updateTitle}
                    />
               </label>

               <label>Body
                   <input 
                    type="text"
                    value={this.state.body}
                    onChange={this.updateBody}
                    />
               </label>
               <input type="submit" value="Add Todo"/>
           </form> 
        )
    }
}

export default TodoForm;


