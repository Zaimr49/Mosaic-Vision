import React from 'react';
import { Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        Welcome to the About page!
      </Typography>
    </div>
  );
};

export default About;
