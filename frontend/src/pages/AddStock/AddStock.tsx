import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  CloudinaryUploadAPI,
  adminStocksAPI,
  subcategoriesAPI,
} from "../../Constants";
import "./AddStock.css";

const categories = ["Boxes by Industry", "Boxes by Material", "Boxes by Style"];

const AddStock: React.FC = () => {
  const { isAdmin, token } = useSelector((state: RootState) => state.User);
  const navigate = useNavigate();
  const [stockData, setStockData] = useState({
    name: "",
    description: "",
    images: [] as string[], // Update to handle multiple images
    category: "",
    subCategory: "",
  });
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/admin-home-page");
    }
  }, [isAdmin, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStockData({ ...stockData, [name]: value });
  };

  const handleCategoryChange = async (e: SelectChangeEvent<string>) => {
    const category = e.target.value as string;
    setStockData({ ...stockData, category, subCategory: "" });
    fetchSubCategories(category);
  };

  const handleSubCategoryChange = (e: SelectChangeEvent<string>) => {
    const subCategory = e.target.value as string;
    setStockData({ ...stockData, subCategory });
  };

  const fetchSubCategories = async (category: string) => {
    try {
      const response = await axios.get(subcategoriesAPI(category), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSubCategories(
        response.data.map((subCategory: any) => subCategory.title)
      );
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setIsUploading(true);

      try {
        const uploadedImages = await Promise.all(
          files.map(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "MosaicVision"); // Replace with your Cloudinary upload preset

            const response = await axios.post(CloudinaryUploadAPI, formData);
            return response.data.url;
          })
        );

        setStockData((prevStockData) => ({
          ...prevStockData,
          images: [...prevStockData.images, ...uploadedImages],
        }));
      } catch (error) {
        console.error("Error uploading images:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setStockData((prevStockData) => ({
      ...prevStockData,
      images: prevStockData.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(adminStocksAPI, stockData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin-all-stock");
    } catch (error) {
      console.error("Failed to add stock", error);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        marginTop: 8,
        marginBottom: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add Stock
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
          {isUploading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Upload Images"
          )}
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleImageUpload}
          />
        </Button>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          {stockData.images.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "inline-block",
                margin: 1,
              }}
            >
              <img src={image} alt={`Stock ${index}`} className="stock-image" />
              <IconButton
                onClick={() => handleRemoveImage(index)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Add Stock
        </Button>
      </form>
    </Box>
  );
};

export default AddStock;
