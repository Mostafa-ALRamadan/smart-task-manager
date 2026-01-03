import React from 'react';
import styles from '../styles/TaskItem.module.css';

const TaskItem = ({ task, deleteTask, toggleComplete, setTaskToEdit }) => {
  return (
    <li className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <span onClick={() => toggleComplete(task.id)} className={styles.taskText}>
        {task.text}
      </span>
      <div className={styles.taskActions}>
        <button onClick={() => setTaskToEdit(task)} className={styles.editButton}>Edit</button>
        <button onClick={() => deleteTask(task.id)} className={styles.deleteButton}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
