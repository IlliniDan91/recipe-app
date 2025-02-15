import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          Recipe App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/recipes">
            Recipes
          </Button>
          <Button color="inherit" component={Link} to="/create">
            Create Recipe
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header; 