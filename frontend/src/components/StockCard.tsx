import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

interface StockCardProps {
  stock: {
    _id: string;
    name: string;
    description: string;
    images: string[];
  };
}


const StockCard: React.FC<StockCardProps> = ({ stock }) => {
    const navigate = useNavigate();

    const handleStockClick = (id: string) => {
        navigate(`/stock/${id}`);
      };
    
  return (
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
  );
};

export default StockCard;
