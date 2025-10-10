import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import styles from './Todo.module.css';
import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todoList: []
      }
    }

    addTodo = (todo) => {
        const { todoList } = this.state;
        this.setState({
            todoList: [...todoList, todo]
        }, console.log(this.state.todoList))
    }

    render() {
        const { todoList } = this.state
        return (
            <div className={styles.todo}>
                <h1 className={styles["todo-heading"]}>What are you planning to do today?</h1>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList todoList={todoList}/>
            </div>
        );
    }
}

export default Todo;