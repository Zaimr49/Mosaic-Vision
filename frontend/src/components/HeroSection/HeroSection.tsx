// import React from 'react';
// import { Container, Typography, Button, Box } from '@mui/material';
// import backgroundImage from './img1.jpg'; // Make sure to adjust the path

// const HeroSection: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         height: '65vh', // Adjust the height as needed
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         transform: 'rotate(180deg)', // Rotate the background image 180 degrees
//         color: '#2E2E2E', // Change text color
//         textAlign: 'left', // Align text to the left
//         padding: 1,
//       }}
//     >
//       <Container maxWidth="md" sx={{ transform: 'rotate(180deg)', paddingLeft: 0 }} disableGutters> {/* Rotate content back to normal */}
//         <Typography 
//           variant="h2" 
//           component="h1"  
//           sx={{ 
//             fontWeight: 'bold', 
//             fontSize: '5rem', // Adjust font size between h1 and h2
//             // marginLeft: '-1em', // Bring text more to the left side
//           }}
//         >
//           Custom<br /> Packaging your 
//         </Typography>
//         <Typography 
//           variant="h3" 
//           component="h1" 
//           gutterBottom 
//           sx={{ 
//             fontWeight: '', 
//             // marginLeft: '-1em', // Bring text more to the left side
//           }}
//         >
//           customers will love
//         </Typography>
//         <Button variant="contained" color="primary" size="large" href="#learn-more" sx={{ 
//             // marginLeft: '-1em', // Bring text more to the left side
//           }}>
//           Learn More
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box,CircularProgress } from '@mui/material';
import backgroundImage from './img1.jpg'; // Make sure to adjust the path
import axios from "axios";
import { testAPI } from "../../Constants";

const HeroSection: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(testAPI);
        setMessage(response.data.message);
      } catch (error) {
        setError("Failed to fetch message");
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: { xs: '80vh', md: '65vh' }, // Adjust the height for different screen sizes
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'rotate(180deg)', // Rotate the background image 180 degrees
        color: '#2E2E2E', // Change text color
        textAlign: 'left', // Align text to the left
        padding: { xs: 2, md: 4 }, // Adjust padding for different screen sizes
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          transform: 'rotate(180deg)',
          paddingLeft: 0,
          textAlign: { xs: 'center', md: 'left' }, // Center text on smaller screens
        }}
        disableGutters
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '3.5rem', md: '5rem' }, // Adjust font size for different screen sizes
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
            fontSize: { xs: '1.5rem', md: '3rem' }, // Adjust font size for different screen sizes
          }}
        >
          customers will love 
          {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        ) : (
          <Typography variant="body1">{message}</Typography>
        )}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#learn-more"
          sx={{
            fontSize: { xs: '0.75rem', md: '1rem' }, // Adjust button font size for different screen sizes
          }}
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
