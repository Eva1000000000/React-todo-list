import React, {Component} from "react";

export default class AddTodo extends Component{
    state={
        label:''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        })
    };
    render(){
        return(
            <form className="todo__add-form" onSubmit={this.onSubmit}>
                <input className="todo__add-input" onChange={this.onLabelChange}
                value={this.state.label}/>
                <button className="todo__add-button">Add Task</button>
            </form>
        )
    }
}