import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Typography, Paper, CircularProgress, Button, Grid } from '@mui/material';
import axios from 'axios';
import { twtAuthTestAPI } from '../Constants';
import StockItem from '../components/StockItem';

const AdminAllStock: React.FC = () => {
  const { email, isAdmin, token } = useSelector((state: RootState) => state.User);
  const navigate = useNavigate();
  const [authMessage, setAuthMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [stocks, setStocks] = useState<any[]>([]);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get(twtAuthTestAPI, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAuthMessage(response.data.message);
      } catch (error) {
        setAuthMessage('Failed to verify authentication');
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin && token) {
      verifyAuth();
    }
  }, [isAdmin, token]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/admin/stocks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStocks(response.data);
      } catch (error) {
        console.error('Failed to fetch stocks', error);
      }
    };

    if (token) {
      fetchStocks();
    }
  }, [token]);



  const handleDeleteStock = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5001/api/admin/stocks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStocks(stocks.filter(stock => stock._id !== id));
    } catch (error) {
      console.error('Failed to delete stock', error);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 4, maxWidth: 900, margin: 'auto', marginTop: 8, marginBottom: 4 }}
    >
      <Typography variant="h4" sx={{textAlign:'center'}} gutterBottom>
        All Stocks Page
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> {email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Is Admin:</strong> {isAdmin ? 'Yes' : 'No'}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="body1" gutterBottom>
          <strong>Auth Message:</strong> {authMessage}
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={() => navigate('/admin-add-stock')} sx={{ marginTop: 2 }}>
        Add Stock
      </Button>
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {stocks.map(stock => (
            <Grid item xs={12} sm={6} md={4} key={stock._id}>
              <StockItem
                stock={stock}
                onDelete={handleDeleteStock}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminAllStock;
