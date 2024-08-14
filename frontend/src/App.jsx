import React, { useState } from 'react';
import { Box, Fab, Typography, TextField, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TaskList from './components/TaskList';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';  // Import the custom theme

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showTaskInput, setShowTaskInput] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
      setShowTaskInput(false);  // Hide the input form after adding a task
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;

    if (newTasks[index].completed) {
      setCompletedTasks([...completedTasks, newTasks[index]]);
    } else {
      setCompletedTasks(completedTasks.filter((_, i) => i !== index));
    }

    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000', 
        color: 'text.primary', 
        minHeight: '100vh',
        minWidth: '100vw',  // Ensures the black background covers the entire width
        padding: 2 
      }}>
        <Box sx={{ 
          width: '100%', 
          maxWidth: '500px', // This keeps the content centered and with a maximum width
          textAlign: 'center',
        }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Simple To Do List
          </Typography>
          <Box sx={{ padding: 2 }}>
            <TaskList
              tasks={tasks}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
            {showTaskInput && (
              <Paper sx={{ padding: 2, marginTop: 2, backgroundColor: 'background.paper' }}>
                <TextField
                  label="New Task"
                  variant="outlined"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={handleKeyPress}  // Listen for Enter key
                  fullWidth
                  sx={{ marginBottom: 2, backgroundColor: '#121212' }}  // Ensure input background is black
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addTask}
                >
                  Add Task
                </Button>
              </Paper>
            )}
          </Box>
        </Box>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={() => setShowTaskInput(!showTaskInput)}  // Toggle the input form
        >
          <AddIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
}

export default App;
