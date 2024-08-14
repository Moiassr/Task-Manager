import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          toggleTaskCompletion={() => toggleTaskCompletion(index)} 
          deleteTask={() => deleteTask(index)} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
