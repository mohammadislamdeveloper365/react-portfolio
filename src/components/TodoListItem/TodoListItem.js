import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import styles from './TodoListItem.module.css';

export default function TodoListItem(props) {
    const [editTodo, setEditTodo] = useState(false);
    const { todo, deleteItem } = props;

    const handleUpdate=()=> {
        setEditTodo(!editTodo);
    };

    const renderTask = () => {
      let content = null;
      content = !editTodo ? <span className={styles["todo-list-task"]}>{todo.todo}</span> : <input type="text" className={styles["todo-list-task-update"]} value={todo.todo}/>;

      return content;
    }

  return (
    <>
      <li key={todo.id} className={styles["todo-list-item"]}>
            {renderTask()}
            <div className={styles["todo-list-icons"]}>
                <span onClick={() => deleteItem(todo.id)}>
                    <MdDelete  className={styles["todo-list-close-icon"]}/>
                </span>
                <span onClick={handleUpdate}>
                    <TiEdit className={styles["todo-list-edit-icon"]} />
                </span>
            </div>
          </li>
    </>
  )
}
