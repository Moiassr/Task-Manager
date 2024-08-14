import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',  // This will apply a dark theme
    primary: {
      main: '#9c27b0',  // Purple color
    },
    background: {
      default: '#121212',  // Black background for the main area
      paper: '#1e1e1e',  // Dark gray background for cards, tabs, etc.
    },
    text: {
      primary: '#ffffff',  // White text color for primary text
      secondary: '#b3b3b3',  // Gray text for secondary information
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          color: '#ffffff',  // Ensure tab text is white
        },
        indicator: {
          backgroundColor: '#9c27b0',  // Purple underline for active tab
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          color: '#b3b3b3',  // Gray text color for tabs
          '&.Mui-selected': {
            color: '#9c27b0',  // Purple color for selected tab
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',  // Ensure all text uses white color
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',  // Dark gray background for paper components
          color: '#ffffff',  // White text inside paper
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#9c27b0',  // Purple color for unchecked checkbox
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',  // White text on buttons
          backgroundColor: '#9c27b0',  // Purple button background
          '&:hover': {
            backgroundColor: '#7b1fa2',  // Darker purple on hover
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: '#9c27b0',  // Purple FAB background
          '&:hover': {
            backgroundColor: '#7b1fa2',  // Darker purple on hover
          },
        },
      },
    },
  },
});

export default theme;
