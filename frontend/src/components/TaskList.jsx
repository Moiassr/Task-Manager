import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <List sx={{ padding: 2 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onToggleComplete={toggleTaskCompletion ? () => toggleTaskCompletion(index) : null}
          onDelete={() => deleteTask(index)}
        />
      ))}
    </List>
  );
};

export default TaskList;
