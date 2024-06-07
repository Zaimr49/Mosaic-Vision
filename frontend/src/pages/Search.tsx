import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { searchAPI } from '../Constants';
import StockCard from '../components/StockCard';

interface Stock {
  _id: string;
  name: string;
  description: string;
  images: string[];
}

const Search: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    console.log("search", search);

    if (search) {
      const fetchSearchResults = async () => {
        try {
          const response = await axios.get(searchAPI(search));
          setStocks(response.data);
        } catch (error) {
          console.error('Failed to fetch search results', error);
        }
      };

      fetchSearchResults();
    }
  }, [location.search]);

  const searchTerm = new URLSearchParams(location.search).get("search");

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 4, maxWidth: 1200, margin: 'auto', marginTop: 8, marginBottom: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      {searchTerm ? (
        <Typography variant="body1" gutterBottom>
          You searched for: <strong>{searchTerm}</strong>
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          No search term provided.
        </Typography>
      )}
      <Grid container spacing={4}>
        {stocks.length > 0 ? (
          stocks.map((stock) => (
            <Grid item key={stock._id} xs={12} sm={6} md={3}>
              <StockCard stock={stock} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" component="div" mt={4}>
            No stock items found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Search;
