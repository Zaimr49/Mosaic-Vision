// src/pages/AdminHome.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Typography, Paper } from '@mui/material';

const AdminHome: React.FC = () => {
  const { email, isAdmin, token } = useSelector((state: RootState) => state.User);

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 4, maxWidth: 600, margin: 'auto', marginTop: 8, marginBottom: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Home
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> {email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Is Admin:</strong> {isAdmin ? 'Yes' : 'No'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Token:</strong> {token}
      </Typography>
    </Box>
  );
};

export default AdminHome;
