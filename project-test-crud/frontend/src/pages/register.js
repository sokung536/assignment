import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { createUser } from '../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password };
      const response = await createUser(newUser);
      if (response.status === 201) {
        swal('Success', 'User registered successfully!', 'success', {
          buttons: false,
          timer: 2000,
        }).then(() => {
          navigate('/login');
        });
      } else {
        swal('Failed', 'Registration failed', 'error');
      }
    } catch (err) {
      console.error('Error registering user:', err);
      swal('Failed', 'An error occurred during registration', 'error');
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center', // จัดให้อยู่ตรงกลางแนวนอน
        alignItems: 'center', // จัดให้อยู่ตรงกลางแนวตั้ง
        bgcolor: 'grey.100',
        padding: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: '400px',
          width: '100%',
          bgcolor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3, // ใส่เงาให้กรอบ
        }}
      >
        <Avatar
          sx={{
            m: '0 auto',
            bgcolor: 'secondary.main',
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center" sx={{ mt: 2 }}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleRegister}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={goToHome}
            sx={{ mt: 1 }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}