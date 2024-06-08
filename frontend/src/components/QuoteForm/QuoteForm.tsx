import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
  SelectChangeEvent
} from "@mui/material";
import axios from "axios";
import { submitQuoteAPI } from "../../Constants"; 

interface FormData {
  fullName: string;
  phoneNo: string;
  emailAddress: string;
  quantity: string;
  color: string;
  productName: string;
  length: string;
  width: string;
  depth: string;
  unit: string;
  message: string;
}
const initialFormData: FormData = {
    fullName: "",
    phoneNo: "",
    emailAddress: "",
    quantity: "",
    color: "",
    productName: "",
    length: "",
    width: "",
    depth: "",
    unit: "inch",
    message: "",
  };
  
const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNo: "",
    emailAddress: "",
    quantity: "",
    color: "",
    productName: "",
    length: "",
    width: "",
    depth: "",
    unit: "inch",
    message: "",
  });

  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
      | React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { length, width, depth, ...rest } = formData;
    const quoteData = {
      ...rest,
      quantity: parseInt(rest.quantity),
      dimensions: {
        length: parseInt(length),
        width: parseInt(width),
        depth: parseInt(depth),
        unit: formData.unit,
      },
    };
    try {
      await axios.post(submitQuoteAPI, quoteData);
      setAlert({
        open: true,
        message: "Quote submitted successfully!",
        severity: "success",
      });
      setFormData(initialFormData);
    } catch (error: any) {
      setAlert({
        open: true,
        message: error.response?.data?.message || "Error submitting quote",
        severity: "error",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#F9FBED" }}>
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
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              variant="outlined"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              label="Phone No"
              name="phoneNo"
              variant="outlined"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              label="Email Address"
              name="emailAddress"
              variant="outlined"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              variant="outlined"
              value={formData.quantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              variant="outlined"
              value={formData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <TextField
              fullWidth
              label="Product Name"
              name="productName"
              variant="outlined"
              value={formData.productName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={3}>
            <TextField
              fullWidth
              label="L"
              name="length"
              variant="outlined"
              value={formData.length}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={3}>
            <TextField
              fullWidth
              label="W"
              name="width"
              variant="outlined"
              value={formData.width}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={3}>
            <TextField
              fullWidth
              label="D"
              name="depth"
              variant="outlined"
              value={formData.depth}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12} md={3}>
            <Select
              fullWidth
              name="unit"
              displayEmpty
              value={formData.unit}
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="inch">inch</MenuItem>
              <MenuItem value="cm">cm</MenuItem>
            </Select>
          </Grid>
          <Grid item sm={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Write short message"
              name="message"
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item sm={12}>
            <Button type="submit" variant="contained" color="warning">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default QuoteForm;
