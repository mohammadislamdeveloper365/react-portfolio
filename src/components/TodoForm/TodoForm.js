import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:'',
            id: ''
        };

        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleTodoSubmit= this.handleTodoSubmit.bind(this);
    }

    handleTodoChange(e) {
        this.setState({
            todo: e.target.value,
            id: uuidv4()
        })
    }

    handleTodoSubmit(e) {
        e.preventDefault();
        const { addTodo } = this.props;
        const { todo, id } = this.state;
        addTodo({todo,id});
        this.setState({
            todo: '',
            id: ''
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