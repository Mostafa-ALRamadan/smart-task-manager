import React from 'react';
import TaskItem from './TaskItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../styles/TaskList.module.css';
import '../styles/animations.css';

const TaskList = ({
  tasks,
  deleteTask,
  toggleComplete,
  setTaskToEdit,
  totalTasks,
  currentFilter,
}) => {
  const getEmptyMessage = () => {
    if (totalTasks === 0) {
      return 'No tasks yet. Add one to get started!';
    }
    if (currentFilter === 'completed') {
      return 'No completed tasks found.';
    }
    return 'No tasks match the current filter.';
  };

  if (tasks.length === 0) {
    return <p className={styles.emptyMessage}>{getEmptyMessage()}</p>;
  }

  return (
    <TransitionGroup component="ul" className={styles.taskList}>
      {tasks.map((task) => (
        <CSSTransition key={task.id} timeout={300} classNames="task">
          <TaskItem
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setTaskToEdit={setTaskToEdit}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;


