// src/pages/AdminHome.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';
import {twtAuthTestAPI} from '../Constants';

const AdminHome: React.FC = () => {
  const { email, isAdmin, token } = useSelector((state: RootState) => state.User);
  const navigate = useNavigate();
  const [authMessage, setAuthMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get(twtAuthTestAPI, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuthMessage(response.data.message);
      } catch (error) {
        setAuthMessage('Failed to verify authentication');
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin && token) {
      verifyAuth();
    }
  }, [isAdmin, token]);

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
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="body1" gutterBottom>
          <strong>Auth Message:</strong> {authMessage}
        </Typography>
      )}
    </Box>
  );
};

export default AdminHome;
