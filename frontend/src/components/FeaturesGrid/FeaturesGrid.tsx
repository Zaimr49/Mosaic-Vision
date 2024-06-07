import React from "react";
import { Box, Typography, Grid } from "@mui/material";

interface FeatureProps {
  image: string;
  title: string;
}

interface FeaturesGridProps {
  features: FeatureProps[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 4, pt: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={2}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Box textAlign="center" width="100%" maxWidth="200px">
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
              <Typography
                variant="h6"
                color="#333333"
                sx={{
                  mt: 0,
                  fontWeight: "800",
                  fontFamily: "Poppins, sans-serif",
                  pr:1,
                  pl:1
                }}
              >
                {feature.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesGrid;
