import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

interface CardData {
  name: string;
  image: string;
}

interface SubCategoryCardProps {
  data: CardData[];
}

const SubCategoryCard: React.FC<SubCategoryCardProps> = ({ data }) => {
  return (
    <Grid container spacing={4} sx={{pl:5,pr:5}}>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card 
            sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            borderRadius: 2,
            boxShadow: 3,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}>
            <Link
              href={`/subcategory/${item.name}`}
              sx={{
                textDecoration: 'none',
                color: '#333333',
              }}
            >
              <CardMedia
                component="img"
                height="225"
                image={item.image}
                alt={item.name}
              />
              <CardContent
                
              >
                <Typography gutterBottom variant="h5" component="div" sx={{
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#333333',
                  fontWeight: 'bold',
                }}>
                  {item.name}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SubCategoryCard;
