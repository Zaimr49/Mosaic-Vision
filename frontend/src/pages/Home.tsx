
import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, Container, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { testAPI } from '../Constants';
import HeroSection from '../components/HeroSection/HeroSection';
import LogoSlider from '../components/LogoSlider/LogoSlider';
import './Home.css';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      <LogoSlider />
      <Container>
        <Typography
          variant="h5"
          color='#333333'
          sx={{
            mt: 5,
            mb: 1,
            textAlign: 'center',
            fontWeight: '800',
            letterSpacing: '0px',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' }, 
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          YOUR CUSTOM PACKAGING PARTNER
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          Elevate your brand with our tailored packaging solutions designed to meet your unique product and industry requirements.
        
        {!isSmallScreen && (
          <>
            Trust us to deliver high-quality custom boxes adorned with your logo, simplifying the packaging process for your business.</>
          
        )}
        </Typography>
      </Container>
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
