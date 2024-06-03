import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Link, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/User_Slice';
import axios from 'axios';
import { adminSignupAPI } from '../Constants';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(adminSignupAPI, values);
        dispatch(setUserData({
          isAdmin: true,
          email: response.data.admin.email,
          token: response.data.token,
        }));
        navigate('/admin-home-page');
      } catch (error) {
        console.error('Failed to sign up', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: 'auto', marginTop: 8, marginBottom: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          sx={{ marginBottom: 2 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          sx={{ marginBottom: 2 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          margin="normal"
          sx={{ marginBottom: 2 }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Box sx={{ position: 'relative' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            type="submit"
            disabled={loading}
          >
            Sign Up
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Box>
      </form>
      <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
        Already have an account? <Link href="/admin-login">Login</Link>
      </Typography>
    </Box>
  );
};

export default Signup;
