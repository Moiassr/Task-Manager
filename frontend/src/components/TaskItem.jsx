import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      }
      sx={{ backgroundColor: '#121212', marginBottom: 1, borderRadius: 1, boxShadow: 1 }}
    >
      {onToggleComplete && (
        <Checkbox
          checked={task.completed}
          onChange={onToggleComplete}
        />
      )}
      <ListItemText
        primary={task.text}
        sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TaskItem;
