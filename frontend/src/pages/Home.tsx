import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Container, Box } from '@mui/material';
import axios from 'axios';
import { testAPI } from '../Constants';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(testAPI);
        setMessage(response.data.message);
      } catch (error) {
        setError('Failed to fetch message');
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  return (
    <>
      <HeroSection />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : (
          <Typography variant="body1">
            {message}
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Home;
