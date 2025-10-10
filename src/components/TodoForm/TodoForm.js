import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:''
        };

        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleTodoSubmit= this.handleTodoSubmit.bind(this);
    }

    handleTodoChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

    handleTodoSubmit(e) {
        e.preventDefault();

        this.setState({
            todo: ''
        })
    }

    render() {
        const { todo } = this.state;
        return (
            <form onSubmit={this.handleTodoSubmit}>
                <input type="text" name="todo" value={todo} onChange={this.handleTodoChange} className="todo-input"/>
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;