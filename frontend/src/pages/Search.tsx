import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // Access URL search parameters
    const search = params.get("search");
    setSearchTerm(search);
  }, []);

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{ padding: 4, maxWidth: 600, margin: 'auto', marginTop: 8, marginBottom: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      {searchTerm ? (
        <Typography variant="body1">
          You searched for: <strong>{searchTerm}</strong>
        </Typography>
      ) : (
        <Typography variant="body1">
          No search term provided.
        </Typography>
      )}
    </Box>
  );
};

export default Search;
