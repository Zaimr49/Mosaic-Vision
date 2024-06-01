import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh', // Adjust the height as needed
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Mosaic Vision
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
        Custom Packaging your customers will love
        </Typography>
        <Button variant="contained" color="primary" size="large" href="#learn-more">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
