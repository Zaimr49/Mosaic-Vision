import React from "react";
import { Typography, Container, useMediaQuery, useTheme } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import LogoSlider from "../../components/LogoSlider/LogoSlider";
import FeaturesGrid from "../../components/FeaturesGrid/FeaturesGrid";
import FinishingImagesGrid from "../../components/FinishingImagesGrid/FinishingImagesGrid";
import "./Home.css";
const features = [
  {
    image:
      "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795517/feature1-ezgif.com-webp-to-jpg-converter_teos5t.jpg",
    title: "No Die & Plate Charges",
  },
  {
    image:
      "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795516/feature2-ezgif.com-webp-to-jpg-converter_cuxozc.jpg",
    title: "Quick Turnaround Time",
  },
  {
    image:
      "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795513/feature3-ezgif.com-webp-to-jpg-converter_sddwtu.jpg",
    title: "Free Shipping",
  },
  {
    image:
      "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795512/feature4-ezgif.com-webp-to-jpg-converter_anvakh.jpg",
    title: "Starting from 50 Boxes",
  },
  {
    image:
      "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795512/feature5-ezgif.com-webp-to-jpg-converter_afdmde.jpg",
    title: "Customize Size & Style",
  },
  {
    image:
      "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717795511/feature6-ezgif.com-webp-to-jpg-converter_zaewxg.jpg",
    title: "Free Graphic Designing",
  },
];

const finishingItemsData = [
  {
    img: "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717841443/finishing1-ezgif.com-webp-to-jpg-converter_tyizhh.jpg",
    title: "Holographic Foiling",
    rows: 2,
    cols: 2,
  },

  
  {
    img: "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717841436/finishing4-ezgif.com-webp-to-jpg-converter_nvga6c.jpg",
    title: "Silver Foiling",
    cols: 2,
  },
  
  {
    img: "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717841440/finishing2-ezgif.com-webp-to-jpg-converter_rdkyum.jpg",
    title: "Gold Foiling",
  },
  {
    img: "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717841436/finishing5-ezgif.com-webp-to-jpg-converter_atqva0.jpg",
    title: "Spot UV",
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717841440/finishing3-ezgif.com-webp-to-jpg-converter_lo3ljb.jpg",
    title: "Embossing",
  },
  {
    img: "https://res.cloudinary.com/dy8prmfuq/image/upload/v1717841436/finishing6-ezgif.com-webp-to-jpg-converter_c3moan.jpg",
    title: "Debossing",
    rows: 1,
    cols: 2,
  },
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
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "3rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          YOUR CUSTOM PACKAGING PARTNER
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 500,
          }}
        >
          Elevate your brand with our tailored packaging solutions designed to
          meet your unique product and industry requirements.
          {!isSmallScreen && (
            <>
              Trust us to deliver high-quality<br></br> custom boxes adorned
              with your logo, simplifying the packaging process for your
              business.
            </>
          )}
        </Typography>
      </Container>
      <Container
        sx={{ backgroundColor: "#F9FBED", pt: 1, pb: 1, mt: 5, mb: 0 }}
      >
        <Typography
          variant="h5"
          color="#333333"
          sx={{
            mt: 5,
            textAlign: "center",
            fontWeight: "800",
            letterSpacing: "0px",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "3rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          ONE PLACE TO GET YOUR CUSTOM PACKAGING
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            mb: 1,
          }}
        >
          Mosaic Vision offers a variety of custom packaging solutions and
          project assistance
          {!isSmallScreen && <br />} with pricing and service you'll love.
        </Typography>
        <FeaturesGrid features={features} />
      </Container>
      <Container sx={{ pt: 1, pb: 1, mb: 5 }}>
        <Typography
          variant="h5"
          color="#333333"
          sx={{
            mt: 5,
            textAlign: "center",
            fontWeight: "800",
            letterSpacing: "0px",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "3rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          PREMIUM FINISHES
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 500,
            mb: 1,
          }}
        >
          VARIETY OF FINISHING OPTIONS TO ENSURE SPECTACULAR LOOKS AND PREMIUM
          FEEL OF CUSTOM BOXES
        </Typography>
        {/* <FinishingImagesGrid images={finishingImages} /> */}
        {/* <FinishingImagesGrid /> */}
        <FinishingImagesGrid finishingItemsData={finishingItemsData} />
      </Container>
    </>
  );
};

export default Home;
