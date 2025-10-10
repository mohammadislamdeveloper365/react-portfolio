import React, { Component } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  render() {
    const { todoList } = this.props;

    return (
      <ul className={styles["todo-list"]}>
        {todoList.map((todo) => (
          <li key={todo.id} className={styles["todo-list-detail"]}>
            <div className={styles["todo-list-task"]}>{todo.todo}</div>
            
              <IoIosCloseCircleOutline  className={styles["todo-list-close"]}/>{" "} 
           
            <TiEdit className={styles["todo-list-edit"]} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
