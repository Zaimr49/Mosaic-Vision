import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Link, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/slices/User_Slice';
import axios from 'axios';
import { adminLoginAPI } from '../Constants';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(adminLoginAPI, values);
        dispatch(setUserData({
          isAdmin: true,
          email: response.data.admin.email,
          token: response.data.token,
        }));
        navigate('/admin-home-page');
      } catch (error) {
        console.error('Failed to login', error);
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
        Login
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
        <Box sx={{ position: 'relative' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            type="submit"
            disabled={loading}
          >
            Login
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
        Don't have an account? <Link href="/admin-signup">Sign up</Link>
      </Typography>
    </Box>
  );
};

export default Login;
