import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import styles from './TodoListItem.module.css';

export default function TodoListItem(props) {
    const { todo, deleteItem } = props;

  return (
    <>
      <li key={todo.id} className={styles["todo-list-item"]}>
            <span className={styles["todo-list-task"]}>{todo.todo}</span>
            <div className={styles["todo-list-icons"]}>
                <span onClick={deleteItem}>
                    <MdDelete  className={styles["todo-list-close-icon"]}/>
                </span>
                <span>
                    <TiEdit className={styles["todo-list-edit-icon"]} />
                </span>
            </div>
          </li>
    </>
  )
}
