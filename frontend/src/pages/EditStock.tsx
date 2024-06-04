import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Button, TextField, Paper, Typography, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent, CircularProgress } from '@mui/material';
import axios from 'axios';
import { CloudinaryUploadAPI } from '../Constants';

const categories = [
  'Boxes by Industry',
  'Boxes by Material',
  'Boxes by Style',
];

const EditStock: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.User);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [stockData, setStockData] = useState({
    name: '',
    description: '',
    images: [''],
    category: '',
    subCategory: '',
  });
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/admin/stocks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStockData(response.data);
        fetchSubCategories(response.data.category);
      } catch (error) {
        console.error('Failed to fetch stock', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, [id, token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStockData({ ...stockData, [name]: value });
  };

  const handleCategoryChange = async (e: SelectChangeEvent<string>) => {
    const category = e.target.value as string;
    setStockData({ ...stockData, category, subCategory: '' });
    fetchSubCategories(category);
  };

  const handleSubCategoryChange = (e: SelectChangeEvent<string>) => {
    const subCategory = e.target.value as string;
    setStockData({ ...stockData, subCategory });
  };

  const fetchSubCategories = async (category: string) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/admin/subcategories/category/${category}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSubCategories(response.data.map((subCategory: any) => subCategory.title));
    } catch (error) {
      console.error('Failed to fetch subcategories', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'gpt_edtech360'); 
      setIsUploading(true);

      try {
        const response = await axios.post(CloudinaryUploadAPI, formData);
        setStockData({ ...stockData, images: [response.data.url] });
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/admin/stocks/${id}`, stockData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/admin-all-stock');
    } catch (error) {
      console.error('Failed to update stock', error);
    }
  };


  

  return loading ? (
    <CircularProgress />
  ) : (
    <Box component={Paper} elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto', marginTop: 8, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Edit Stock
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={stockData.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          margin="normal"
          value={stockData.description}
          onChange={handleInputChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={stockData.category}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>SubCategory</InputLabel>
          <Select
            name="subCategory"
            value={stockData.subCategory}
            onChange={handleSubCategoryChange}
            disabled={!stockData.category}
          >
            {subCategories.map((subCategory) => (
              <MenuItem key={subCategory} value={subCategory}>
                {subCategory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          {isUploading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Upload Image'}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </Button>
        {stockData.images[0] && (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <img src={stockData.images[0]} alt="Stock" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        )}
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Update Stock
        </Button>
      </form>
    </Box>
  );
};

export default EditStock;
