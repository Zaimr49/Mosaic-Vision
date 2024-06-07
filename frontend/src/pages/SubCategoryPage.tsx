import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { publicStocksBySubCategoryAPI } from '../Constants';
import HeroSection from '../components/HeroSection/HeroSection';

interface Stock {
  _id: string;
  name: string;
  description: string;
  images: string[];
}

const SubCategoryPage: React.FC = () => {
  const { subCategory } = useParams<{ subCategory: string }>();
  const [stocks, setStocks] = useState<Stock[]>([]);
  const navigate = useNavigate();

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

  const handleStockClick = (id: string) => {
    navigate(`/stock/${id}`);
  };

  return (
    <>
      <HeroSection />
      <Container>
        <Box my={4} textAlign="center">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Custom {subCategory}
          </Typography>
          <Grid container spacing={4}>
            {stocks.map((stock) => (
              <Grid item key={stock._id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => handleStockClick(stock._id)}
                >
                  {stock.images.length > 0 && (
                    <CardMedia
                      component="img"
                      alt={stock.name}
                      height="250"
                      image={stock.images[0]}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6" component="div" fontWeight="bold">
                      {stock.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SubCategoryPage;
