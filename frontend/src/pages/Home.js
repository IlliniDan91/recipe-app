import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Recipe App
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Discover and share amazing recipes
      </Typography>
      <Button
        component={Link}
        to="/recipes"
        variant="contained"
        size="large"
        sx={{ mt: 4 }}
      >
        Browse Recipes
      </Button>
    </Box>
  );
}

export default Home; 