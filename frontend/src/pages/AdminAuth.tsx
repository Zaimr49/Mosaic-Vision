import React, { useEffect } from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { isAdmin } = useSelector((state: RootState) => state.User);

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin-home-page');
    }
  }, [isAdmin, navigate]);

  const handleLogin = () => {
    navigate('/admin-login');
  };

  const handleSignup = () => {
    navigate('/admin-signup');
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 600,
        margin: 'auto',
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Admin Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the admin page. Here you can manage your website content and settings.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondary" fullWidth onClick={handleSignup}>
            Signup
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
