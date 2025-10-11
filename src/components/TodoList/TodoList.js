import React, { Component } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  render() {
    const { todoList } = this.props;

    return (
      <ul className={styles["todo-list"]}>
        {todoList.map((todo) => <TodoListItem todo={todo} key={todo.id}/>)}
      </ul>
    );
  }
}

export default TodoList;
