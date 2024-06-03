import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with', { email, password });
    navigate('/');
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: 'auto', marginTop: 8, marginBottom: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email"
        margin="normal"
        sx={{ marginBottom: 2 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        sx={{ marginBottom: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
        Don't have an account? <Link href="/admin-signup">Sign up</Link>
      </Typography>
    </Box>
  );
};

export default Login;
