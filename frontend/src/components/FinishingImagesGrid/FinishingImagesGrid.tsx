// // // // // src/FinishingImagesGrid.tsx
// // // // import React from 'react';
// // // // import { Grid, Box, Typography } from '@mui/material';

// // // // interface FinishingImagesGridProps {
// // // //   images: { src: string; alt: string; label: string }[];
// // // // }

// // // // const FinishingImagesGrid: React.FC<FinishingImagesGridProps> = ({ images }) => {
// // // //   return (
// // // //     <Grid container spacing={2}>
// // // //       {images.map((image, index) => (
// // // //         <Grid item xs={12} sm={6} md={4} key={index}>
// // // //           <Box
// // // //             sx={{
// // // //               position: 'relative',
// // // //               overflow: 'hidden',
// // // //               '&:hover .overlay': {
// // // //                 opacity: 1,
// // // //               },
// // // //             }}
// // // //           >
// // // //             <img
// // // //               src={image.src}
// // // //               alt={image.alt}
// // // //               style={{ width: '100%', height: 'auto' }}
// // // //             />
// // // //             <Box
// // // //               className="overlay"
// // // //               sx={{
// // // //                 position: 'absolute',
// // // //                 bottom: 0,
// // // //                 left: 0,
// // // //                 right: 0,
// // // //                 background: 'rgba(0, 0, 0, 0.6)',
// // // //                 color: '#fff',
// // // //                 padding: '10px',
// // // //                 textAlign: 'center',
// // // //                 opacity: 0,
// // // //                 transition: 'opacity 0.3s',
// // // //               }}
// // // //             >
// // // //               <Typography variant="body1">{image.label}</Typography>
// // // //             </Box>
// // // //           </Box>
// // // //         </Grid>
// // // //       ))}
// // // //     </Grid>
// // // //   );
// // // // };

// // // // export default FinishingImagesGrid;
// // // // src/FinishingImagesGrid.tsx
// // // import React from 'react';
// // // import { ImageList, ImageListItem, ImageListItemBar, Box, Typography, IconButton } from '@mui/material';
// // // import InfoIcon from '@mui/icons-material/Info';

// // // interface FinishingImagesGridProps {
// // //   images: { src: string; alt: string; label: string; rows?: number; cols?: number }[];
// // // }

// // // const FinishingImagesGrid: React.FC<FinishingImagesGridProps> = ({ images }) => {

// // //   const srcset = (image: string, size: number, rows = 1, cols = 1) => ({
// // //     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
// // //     srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
// // //   });

// // //   return (
// // //     <ImageList
// // //       sx={{ width: '100%', height: 'auto' }}
// // //       variant="quilted"
// // //       cols={4}
// // //       rowHeight={121}
// // //     >
// // //       {images.map((image, index) => (
// // //         <ImageListItem key={index} cols={image.cols || 1} rows={image.rows || 1}>
// // //           <img
// // //             {...srcset(image.src, 121, image.rows, image.cols)}
// // //             alt={image.alt}
// // //             loading="lazy"
// // //           />
// // //           <Box
// // //             sx={{
// // //               position: 'absolute',
// // //               top: '50%',
// // //               left: '50%',
// // //               transform: 'translate(-50%, -50%)',
// // //               backgroundColor: 'rgba(0, 0, 0, 0.6)',
// // //               color: 'white',
// // //               padding: '20px',
// // //               borderRadius: '10px',
// // //               opacity: 0,
// // //               transition: 'opacity 0.3s',
// // //               textAlign: 'center',
// // //               width: '100%',
// // //               height: '100%',
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               justifyContent: 'center',
// // //               '&:hover': {
// // //                 opacity: 1,
// // //               },
// // //             }}
// // //           >
// // //             <Typography variant="h6" component="div">
// // //               {image.label}
// // //             </Typography>
// // //           </Box>
// // //           <ImageListItemBar
// // //             title={image.label}
// // //             actionIcon={
// // //               <IconButton
// // //                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
// // //                 aria-label={`info about ${image.label}`}
// // //               >
// // //                 <InfoIcon />
// // //               </IconButton>
// // //             }
// // //           />
// // //         </ImageListItem>
// // //       ))}
// // //     </ImageList>
// // //   );
// // // };

// // // export default FinishingImagesGrid;
// import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

// const finishingItemsData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
// ];

// const srcset = (image: string, size: number, rows = 1, cols = 1) => {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
//   };
// };

// export default function FinishingImagesGrid() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }} variant="quilted" cols={4} rowHeight={121}>
//       {finishingItemsData.map((item) => (
//         <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//           <img
//             {...srcset(item.img, 121, item.rows, item.cols)}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
// import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

// interface ImageProps {
//   src: string;
//   alt: string;
//   label: string;
// }

// interface FinishingImagesGridProps {
//   images: ImageProps[];
// }

// const FinishingImagesGrid: React.FC<FinishingImagesGridProps> = ({ images }) => {
//   return (
//     <ImageList sx={{ width: 500, height: 450, overflow: 'hidden' }} variant="quilted" cols={3} rowHeight={150}>
//       {images.slice(0, 6).map((item, index) => (
//         <ImageListItem key={index} cols={1} rows={1}>
//           <img
//             src={`${item.src}?w=248&fit=crop&auto=format`}
//             srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             alt={item.alt}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.label}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.label}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// export default FinishingImagesGrid;
// import * as React from 'react';
// import { ImageList, ImageListItem, ImageListItemBar, Box, useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// const finishingItemsData = [
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Holographic Foiling',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Gold Foiling',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Embossing',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Silver Foiling',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Spot UV',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Debossing',
//   },
// ];

// export default function FinishingImagesGrid() {
//   const theme = useTheme();
//   const matchesXs = useMediaQuery(theme.breakpoints.down('sm'));
//   const matchesSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

//   let cols = 3;
//   if (matchesXs) {
//     cols = 1;
//   } else if (matchesSm) {
//     cols = 2;
//   } else if (matchesMd) {
//     cols = 3;
//   }

//   return (
//     <Box sx={{ backgroundColor: '#F9FBED', padding: '20px', borderRadius: '8px' }}>
//       <ImageList sx={{ width: '100%' }} cols={cols} gap={16}>
//         {finishingItemsData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.title}
//               loading="lazy"
//               style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//             />
//             <ImageListItemBar
//               title={item.title}
//               position="bottom"
//               sx={{
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 '& .MuiImageListItemBar-title': {
//                   fontFamily: 'Poppins, sans-serif',
//                 },
//               }}
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// }

//Working
// import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import { Box } from '@mui/material';

// const srcset = (image: string, size: number, rows = 1, cols = 1) => {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
//   };
// };

// interface FinishingImagesGridProps {
//   finishingItemsData: Array<{
//     img: string;
//     title: string;
//     author: string;
//     rows?: number;
//     cols?: number;
//   }>;
// }

// const FinishingImagesGrid: React.FC<FinishingImagesGridProps> = ({ finishingItemsData }) => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       <ImageList sx={{ width: { xs: '100%', sm: 500 }, height: 'auto' }} variant="masonry" cols={3} gap={8}>
//         {finishingItemsData.map((item) => (
//           <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//             <img
//               {...srcset(item.img, 121, item.rows, item.cols)}
//               alt={item.title}
//               loading="lazy"
//             />
//             <ImageListItemBar
//               title={item.title}
//               subtitle={item.author}
//               actionIcon={
//                 <IconButton
//                   sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                   aria-label={`info about ${item.title}`}
//                 >
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// };

// export default FinishingImagesGrid;
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/material';

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
        cols={3}
        gap={8}
      >
        {finishingItemsData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
            <ImageListItemBar
              title={item.title}
              // actionIcon={
              //   <IconButton
              //     sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              //     aria-label={`info about ${item.title}`}
              //   >
              //   </IconButton>
              // }
              sx={{
                '& .MuiImageListItemBar-title': {
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                },
                '& .MuiImageListItemBar-subtitle': {
                  fontSize: '1rem',
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
