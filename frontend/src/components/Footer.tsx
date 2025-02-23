import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 5, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.700' }}>
              CATALOG
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Labels</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Hang Tags</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Inserts</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Stickers</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>PU Patches</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Office Stationery</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Promotional Items</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.700' }}>
              INFORMATION
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>FAQs</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Products</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Services</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>About Us</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.700' }}>
              OUR STORE
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>About Mosaic Vision</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Contact</Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ color: 'grey.600', mb: 1 }}>Terms of Use</Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'grey.700' }}>
              CONTACT US
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <LocationOnIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 1 }} />
              19-A Abbot Road Near PTV Station, Opp Daily Sadaat Lahore Pakistan<br />
              <AccessTimeIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 1 }} />
              Mon-Sat 9:00 am - 10:00 pm<br />
              <PhoneIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 1 }} />
              +92 324 8473731<br />
              <EmailIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 1 }} />
              info@mosaic-vision.net<br />
            </Typography>
            <Box mt={2}>
              <Link href="https://www.facebook.com/mosaicvisionpk/" color="inherit" sx={{ mr: 1 }}>
                <FacebookIcon sx={{ fontSize: 40 }} />
              </Link>
              <Link href="https://www.linkedin.com/company/mosaic-vision/" color="inherit">
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()}{" "}
            Mosaic Vision. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
