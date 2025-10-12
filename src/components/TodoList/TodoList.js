import React, { Component } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  render() {
    const { todoList, deleteTodo, updateTodo } = this.props;

    return (
      <ul className={styles["todo-list"]}>
        {todoList.map((todo) => <TodoListItem todo={todo} key={todo.id} deleteItem={deleteTodo} updateItem={updateTodo}/>)}
      </ul>
    );
  }
}

export default TodoList;
