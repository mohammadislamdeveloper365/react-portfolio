import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo:''
        };

        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleTodoSubmit= this.handleTodoSubmit.bind(this);
        this.inputRef = React.createRef();
    }

    handleTodoChange(e) {
        this.setState({
            todo: e.target.value
        })
    }

    handleTodoSubmit(e) {
        e.preventDefault();
        const { addTodo } = this.props;
        const { todo } = this.state;
        if (todo !== "") {
          addTodo({ todo, id: uuidv4() });
          this.setState({
            todo: "",
            id: "",
          });
        }
        this.inputRef.current.focus();
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    render() {
        const { todo } = this.state;
        
        return (
            <form onSubmit={this.handleTodoSubmit} className={styles['todo-form']}>
                <input type="text" name="todo" value={todo} onChange={this.handleTodoChange} className={styles['todo-input']} ref={this.inputRef}/>
                <button className={styles['todo-button']}>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;