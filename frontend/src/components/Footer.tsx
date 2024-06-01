import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 5, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Catalog
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">Labels</Link>
            <Link href="#" color="inherit" underline="none" display="block">Hang Tags</Link>
            <Link href="#" color="inherit" underline="none" display="block">Inserts</Link>
            <Link href="#" color="inherit" underline="none" display="block">Stickers</Link>
            <Link href="#" color="inherit" underline="none" display="block">PU Patches</Link>
            <Link href="#" color="inherit" underline="none" display="block">Office Stationery</Link>
            <Link href="#" color="inherit" underline="none" display="block">Promotional Items</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">FAQs</Link>
            <Link href="#" color="inherit" underline="none" display="block">Products</Link>
            <Link href="#" color="inherit" underline="none" display="block">Services</Link>
            <Link href="#" color="inherit" underline="none" display="block">About Us</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Our Store
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">About Mosaic Vision</Link>
            <Link href="#" color="inherit" underline="none" display="block">Contact</Link>
            <Link href="#" color="inherit" underline="none" display="block">Terms of Use</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="textSecondary">
              19-A Abbot Road Near PTV Station, Opp Daily Sadaat Lahore Pakistan<br />
              Daily 9:00 am – 10:00 pm<br />
              +92 324 8473731<br />
              Toll free
            </Typography>
            <Box mt={2}>
              <Link href="https://www.facebook.com/mosaicvisionpk/" color="inherit" sx={{ mr: 1 }}>
                <FacebookIcon />
              </Link>
              <Link href="https://www.linkedin.com/company/mosaic-vision/" color="inherit">
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
