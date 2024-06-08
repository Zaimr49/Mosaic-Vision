import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
};

interface FinishingImagesGridProps {
  finishingItemsData: Array<{
    img: string;
    title: string;
    rows?: number;
    cols?: number;
  }>;
}

const FinishingImagesGrid: React.FC<FinishingImagesGridProps> = ({ finishingItemsData }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <ImageList
        sx={{
          width: '100%',
          maxWidth: '1200px', 
          height: 'auto',
        }}
        variant="masonry"
        cols={isSmallScreen ? 1 : 3}
        gap={8}
      >
        {finishingItemsData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ 
                width: '100%', 
                height: isSmallScreen ? '350px' : 'auto'
              }}
            />
            <ImageListItemBar
              title={item.title}
              
              sx={{
                '& .MuiImageListItemBar-title': {
                  fontSize: isSmallScreen ? '1rem' : '1.5rem',
                  fontWeight: 'bold',
                },
                '& .MuiImageListItemBar-subtitle': {
                  fontSize: isSmallScreen ? '0.75rem' : '1rem',
                },
              }}
              
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default FinishingImagesGrid;
