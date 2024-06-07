import React from "react";
import {
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import "./Home.css";

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
      
    </>
  );
};

export default Home;
