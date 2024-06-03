import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NotFoundPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h6" component="h2" sx={{ mb: 4 }}>
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" sx={{ backgroundColor: theme.palette.secondary.main }}>
        Go Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
