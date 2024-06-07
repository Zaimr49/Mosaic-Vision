import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Grid } from '@mui/material';
import { publicStocksBySubCategoryAPI } from '../Constants';
import HeroSection from '../components/HeroSection/HeroSection';
import StockCard from '../components/StockCard';

interface Stock {
  _id: string;
  name: string;
  description: string;
  images: string[];
}

const SubCategoryPage: React.FC = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(publicStocksBySubCategoryAPI(subCategory as string));
        setStocks(response.data);
      } catch (error) {
        console.error('Failed to fetch stocks', error);
      }
    };

    fetchStocks();
  }, [subCategory]);

  return (
    <>
      <HeroSection />
      <Container>
        <Box my={4} textAlign="center">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Custom {subCategory}
          </Typography>
          {stocks.length > 0 ? (
            <Grid container spacing={4}>
              {stocks.map((stock) => (
                <Grid item key={stock._id} xs={12} sm={6} md={3}>
                  <StockCard stock={stock} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h6" component="div" mt={4}>
              No stock items found for this category.
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default SubCategoryPage;
