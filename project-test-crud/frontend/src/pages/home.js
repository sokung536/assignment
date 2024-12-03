import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login'); 
  };

  const goToRegister = () => {
    navigate('/register'); 
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        bgcolor: 'grey.100',
        padding: 4,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Full-Stack Application
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={goToLogin}
          sx={{ px: 4 }}
        >
          Go to Login
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={goToRegister}
          sx={{ px: 4 }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Home;