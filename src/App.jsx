import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialTasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

 const addTask = () => {
  if (newTask.trim() === '') {
    alert('Please enter a task before adding.');
    return;
  }
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const task = { id: newId, title: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
  <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
    <div className="p-4 bg-white rounded shadow w-100" style={{ maxWidth: '700px' }}>
      <h2 className="mb-4 text-center">Task Manager</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>Add</button>
      </div>

      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <div>
              <button
                className={`btn btn-sm me-2 ${task.completed ? 'btn-secondary' : 'btn-success'}`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default App;
