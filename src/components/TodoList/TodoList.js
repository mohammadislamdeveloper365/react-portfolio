import React, { Component } from 'react';



class TodoList extends Component {
    
    render() {
        const { todoList } = this.props;

        return (
            <>
                {todoList.map(todo=><li key={todo.id}>{todo.todo}</li>)}
            </>
        );
    }
}

export default TodoList;