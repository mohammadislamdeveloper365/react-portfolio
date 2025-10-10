import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <h1>What are you planning to do today?</h1>
                <TodoForm/>
                <TodoList/>
            </div>
        );
    }
}

export default Todo;