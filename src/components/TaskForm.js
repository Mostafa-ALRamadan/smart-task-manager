import React, { useState, useEffect } from 'react';
import styles from '../styles/TaskForm.module.css';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.text);
    } else {
      setTask('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty');
      return;
    }

    if (taskToEdit) {
      editTask({ ...taskToEdit, text: task });
    } else {
      addTask({ id: Date.now(), text: task, completed: false });
    }
    setTask('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={taskToEdit ? 'Edit your task' : 'Add a new task'}
        className={styles.taskInput}
      />
      <button type="submit" className={styles.submitButton}>
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default TaskForm;
