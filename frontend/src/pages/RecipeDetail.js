import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  Paper,
  Grid 
} from '@mui/material';
import sampleRecipes from '../data/sampleRecipes';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Using sample data instead of API call
    const foundRecipe = sampleRecipes.find(r => r._id === id);
    setRecipe(foundRecipe);
  }, [id]);

  const handleDelete = () => {
    // For now, just navigate back to recipes
    navigate('/recipes');
  };

  if (!recipe) return <Typography>Recipe not found</Typography>;

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            {recipe.title}
          </Typography>
        </Grid>
        
        {recipe.image && (
          <Grid item xs={12}>
            <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        )}

        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {recipe.description}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Ingredients</Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Instructions</Typography>
            <List>
              {recipe.instructions.map((instruction, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${instruction}`} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mt: 2 }}>
            <Button 
              variant="contained" 
              onClick={() => navigate(`/edit/${id}`)}
              sx={{ mr: 2 }}
            >
              Edit Recipe
            </Button>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={handleDelete}
            >
              Delete Recipe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RecipeDetail; 