import React from 'react';
import {
  Grid, TextField, MenuItem, Select, Button, Typography, Box,
} from '@mui/material';

const CustomQuoteForm: React.FC = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#FDFDE1' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        GET CUSTOM QUOTE
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontWeight: 'bold', display: 'inline-flex', alignItems: 'center' }}>
        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/32/000000/external-delivery-logistics-delivery-kiranshastry-solid-kiranshastry.png" alt="Free Shipping" style={{ marginRight: 8 }} />
        Free Shipping
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Phone No" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Email Address" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Quantity" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select fullWidth displayEmpty defaultValue="" variant="outlined">
            <MenuItem value="" disabled>
              Select Color
            </MenuItem>
            <MenuItem value="Color1">Color1</MenuItem>
            <MenuItem value="Color2">Color2</MenuItem>
            <MenuItem value="Color3">Color3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Product Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="L" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="W" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="D" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select fullWidth displayEmpty defaultValue="inch" variant="outlined">
            <MenuItem value="inch">inch</MenuItem>
            <MenuItem value="cm">cm</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth multiline rows={4} label="Write short message" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>3 + 8 = </Typography>
            <TextField fullWidth label="Ans" variant="outlined" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">(Are you human, or spambot?)</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="warning">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomQuoteForm;
