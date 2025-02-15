import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button, Alert, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recipes from the API
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching recipes...');
        
        const response = await fetch('http://localhost:5000/api/recipes', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received recipes:', data);
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(`Failed to load recipes: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '200px' }}>
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Alert severity="error" style={{ margin: '20px 0' }}>
        {error}
      </Alert>
    );
  }

  return (
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe._id}>
          <Card>
            {recipe.image && (
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {recipe.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {recipe.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prep: {recipe.prepTime}min | Cook: {recipe.cookTime}min
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/recipes/${recipe._id}`}>
                View Details
              </Button>
              <Button size="small" component={Link} to={`/edit/${recipe._id}`}>
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList; 