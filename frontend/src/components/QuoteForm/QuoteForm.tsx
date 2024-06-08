import React from 'react';
import {
  Grid, TextField, MenuItem, Select, Button, Typography, Box,
} from '@mui/material';

const CustomQuoteForm: React.FC = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#F9FBED' }}>
      <Typography
          variant="h5"
          color="#333333"
          sx={{
            textAlign: "center",
            fontWeight: "800",
            letterSpacing: "0px",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "3rem" },
            fontFamily: "Poppins, sans-serif",
          }}
        >
        GET CUSTOM QUOTE
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item sm={12} md={4}>
          <TextField fullWidth label="Full Name" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={4}>
          <TextField fullWidth label="Phone No" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={4}>
          <TextField fullWidth label="Email Address" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={4}>
          <TextField fullWidth label="Quantity" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={4}>
        <TextField fullWidth label="Color" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={4}>
          <TextField fullWidth label="Product Name" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={3}>
          <TextField fullWidth label="L" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={3}>
          <TextField fullWidth label="W" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={3}>
          <TextField fullWidth label="D" variant="outlined" />
        </Grid>
        <Grid item sm={12} md={3}>
          <Select fullWidth displayEmpty defaultValue="inch" variant="outlined">
            <MenuItem value="inch">inch</MenuItem>
            <MenuItem value="cm">cm</MenuItem>
          </Select>
        </Grid>
        <Grid item sm={12}>
          <TextField fullWidth multiline rows={4} label="Write short message" variant="outlined" />
        </Grid>
        
        <Grid item sm={12}>
          <Button variant="contained" color="warning">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomQuoteForm;
