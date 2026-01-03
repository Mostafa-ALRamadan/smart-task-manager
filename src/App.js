import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Task Manager</h1>
      </header>
      <main>
        <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
        <Filter setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setTaskToEdit={setTaskToEdit}
          totalTasks={tasks.length}
          currentFilter={filter}
        />
      </main>
    </div>
  );
}

export default App;
