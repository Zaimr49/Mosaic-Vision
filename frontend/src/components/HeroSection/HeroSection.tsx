import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import backgroundImage from './img1.jpg'; // Make sure to adjust the path

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '65vh', // Adjust the height as needed
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotate(180deg)', // Rotate the background image 180 degrees
        color: '#2E2E2E', // Change text color
        textAlign: 'left', // Align text to the left
        padding: 1,
      }}
    >
      <Container maxWidth="md" sx={{ transform: 'rotate(180deg)', paddingLeft: 0 }} disableGutters> {/* Rotate content back to normal */}
        <Typography 
          variant="h2" 
          component="h1"  
          sx={{ 
            fontWeight: 'bold', 
            fontSize: '5rem', // Adjust font size between h1 and h2
            // marginLeft: '-1em', // Bring text more to the left side
          }}
        >
          Custom<br /> Packaging your 
        </Typography>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: '', 
            // marginLeft: '-1em', // Bring text more to the left side
          }}
        >
          customers will love
        </Typography>
        <Button variant="contained" color="primary" size="large" href="#learn-more" sx={{ 
            // marginLeft: '-1em', // Bring text more to the left side
          }}>
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
