import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import {testAPI} from '../Constants';

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
    <Container>
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>
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
  );
};

export default Home;
