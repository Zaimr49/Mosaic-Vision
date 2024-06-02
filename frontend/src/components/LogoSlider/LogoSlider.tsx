// import React from 'react';
// import { Container, Box } from '@mui/material';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { logos } from './ImgURL';
// import './LogoSlider.css';

// const LogoSlider: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 10,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     speed: 5000,
//     autoplaySpeed: 1000,
//     cssEase: 'linear',
//     centerMode: false,
//     centerPadding: '0px',
//   };

//   return (
//     <Container
//     maxWidth={false}
//       sx={{
//         backgroundColor: '#f9f9f9',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         marginTop: '0.35rem',
//       }}>
//     <Container
//       maxWidth={false}
//       sx={{
//         backgroundColor: '#f9f9f9',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         maxWidth:'70%',
//         paddingBlockStart:'1px'
//       }}
//     >
//       <Box sx={{ padding: 0}}>
//         <Slider {...settings}>
//           {logos.map((logo, index) => (
//             <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
//               <img src={logo.url} className="img-normal" alt={`logo-${index}`} />
//             </Box>
//           ))}
//         </Slider>
//       </Box>
//     </Container>
//     </Container>
//   );
// };

// export default LogoSlider;

import React from 'react';
import { Container, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logos } from './ImgURL';
import './LogoSlider.css';

const LogoSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    centerMode: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1280, // Laptop
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Mobile Landscape
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Mobile Portrait
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#f9f9f9',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '0.35rem',
      }}>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: '#f9f9f9',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxWidth: { xs: '100%', md: '70%' }, 
          paddingBlockStart: '1px'
        }}
      >
        <Box sx={{ padding: 0 }}>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo.url} className="img-normal" alt={`logo-${index}`} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Container>
  );
};

export default LogoSlider;
