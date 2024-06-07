import React from "react";
import {
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import FeaturesGrid from "../../components/FeaturesGrid/FeaturesGrid";
import "./Home.css";
const features = [
  { image: 'https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795517/feature1-ezgif.com-webp-to-jpg-converter_teos5t.jpg', title: 'No Die & Plate Charges' },
  { image: 'https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795516/feature2-ezgif.com-webp-to-jpg-converter_cuxozc.jpg', title: 'Quick Turnaround Time' },
  { image: 'https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795513/feature3-ezgif.com-webp-to-jpg-converter_sddwtu.jpg', title: 'Free Shipping' },
  { image: 'https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795512/feature4-ezgif.com-webp-to-jpg-converter_anvakh.jpg', title: 'Starting from 50 Boxes' },
  { image: 'https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795512/feature5-ezgif.com-webp-to-jpg-converter_afdmde.jpg', title: 'Customize Size & Style' },
  { image: 'https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795511/feature6-ezgif.com-webp-to-jpg-converter_zaewxg.jpg', title: 'Free Graphic Designing' },
];
const Home: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <>
      <HeroSection />
      <LogoSlider />
      <Container>
        <Typography
          variant="h5"
          color="#333333"
          sx={{
            mt: 5,
            mb: 1,
            textAlign: "center",
            fontWeight: "800",
            letterSpacing: "0px",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          YOUR CUSTOM PACKAGING PARTNER
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Elevate your brand with our tailored packaging solutions designed to
          meet your unique product and industry requirements.
          {!isSmallScreen && (
            <>
              Trust us to deliver high-quality custom boxes adorned with your
              logo, simplifying the packaging process for your business.
            </>
          )}
          
        </Typography>
      </Container>
      <Container sx={{backgroundColor:'#F9FBED',pt:1,pb:1,mt:5,mb:5}}>
        <Typography
          variant="h5"
          color="#333333"
          sx={{
            mt: 5,
            mb: 1,
            textAlign: "center",
            fontWeight: "800",
            letterSpacing: "0px",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          ONE PLACE TO GET YOUR CUSTOM PACKAGING
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Mosaic Vision offers a variety of custom packaging solutions and project assistance <br />
with pricing and service you'll love.
          
        </Typography>
        <FeaturesGrid features={features} />
      </Container>
      
    </>
  );
};

export default Home;
