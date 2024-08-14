import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Button variant="contained" sx={{ marginRight: 1 }}>Daily</Button>
        <Button variant="outlined">Monthly</Button>
      </Box>
      <Typography variant="h5">4th March 2018</Typography>
    </Box>
  );
};

export default Header;
