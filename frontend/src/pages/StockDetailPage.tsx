import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import { publicStockDetailAPI } from '../Constants';

interface Stock {
  _id: string;
  name: string;
  description: string;
  images: string[];
  category: string;
  subCategory: string;
}

const StockDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [stock, setStock] = useState<Stock | null>(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get(publicStockDetailAPI(id as string));
        setStock(response.data);
      } catch (error) {
        console.error('Failed to fetch stock', error);
      }
    };

    fetchStock();
  }, [id]);

  if (!stock) {
    return (
      <Container>
        <Typography variant="h6" component="div" textAlign="center">
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Box my={4}>
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {stock.name}
          </Typography>
          <Card>
            {stock.images.length > 0 && (
              <CardMedia
                component="img"
                alt={stock.name}
                height="400"
                image={stock.images[0]}
                sx={{ objectFit: 'cover' }}
              />
            )}
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {stock.name}
              </Typography>
              <Typography variant="body1" component="div">
                {stock.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default StockDetailPage;
