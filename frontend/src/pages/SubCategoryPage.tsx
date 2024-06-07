import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const SubCategoryPage: React.FC = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [subCategoryData, setSubCategoryData] = useState<any>(null);

  useEffect(() => {
    const fetchSubCategoryData = async () => {
      try {
        // Replace with the actual API endpoint to fetch subcategory data
        const response = await axios.get(`/api/subcategories/${subCategory}`);
        setSubCategoryData(response.data);
      } catch (error) {
        console.error('Failed to fetch subcategory data', error);
      }
    };

    fetchSubCategoryData();
  }, [subCategory]);

  if (!subCategoryData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {subCategoryData.title}
        </Typography>
        <Typography variant="body1">
          {/* Render additional subcategory details here */}
        </Typography>
      </Box>
    </Container>
  );
};

export default SubCategoryPage;
