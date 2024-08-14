import React from 'react';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={toggleTaskCompletion}
      >
        {task.text}
      </span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TaskItem;
