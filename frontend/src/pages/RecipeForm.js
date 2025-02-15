import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import sampleRecipes from '../data/sampleRecipes';

function RecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: [''],
    instructions: [''],
    prepTime: '',
    cookTime: '',
    servings: '',
    tags: '',
    image: ''
  });

  useEffect(() => {
    if (id) {
      // Using sample data instead of API call
      const recipe = sampleRecipes.find(r => r._id === id);
      if (recipe) {
        setFormData({
          ...recipe,
          tags: recipe.tags.join(', ')
        });
      }
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Format the data before sending
      const recipeData = {
        ...formData,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
        prepTime: Number(formData.prepTime),
        cookTime: Number(formData.cookTime),
        servings: Number(formData.servings)
      };

      // If no image URL is provided, use a default image
      if (!recipeData.image) {
        recipeData.image = 'https://via.placeholder.com/300x200?text=No+Image';
      }

      console.log('Sending recipe data:', recipeData);

      const baseURL = process.env.NODE_ENV === 'production' 
        ? '/api' 
        : 'http://localhost:5000/api';

      const url = id 
        ? `${baseURL}/recipes/${id}`
        : `${baseURL}/recipes`;
      
      const method = id ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response text:', responseText);

      if (!response.ok) {
        throw new Error(responseText || 'Failed to save recipe');
      }

      const data = JSON.parse(responseText);
      
      // Navigate back to recipes page after successful save
      navigate('/recipes');
    } catch (error) {
      console.error('Error saving recipe:', error);
      alert('Failed to save recipe: ' + error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleArrayChange = (index, field, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const addArrayItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const removeArrayItem = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {id ? 'Edit Recipe' : 'Create New Recipe'}
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            {formData.ingredients.map((ingredient, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 1 }}>
                <TextField
                  fullWidth
                  value={ingredient}
                  onChange={(e) => handleArrayChange(index, 'ingredients', e.target.value)}
                  label={`Ingredient ${index + 1}`}
                  required
                />
                <IconButton
                  onClick={() => removeArrayItem('ingredients', index)}
                  disabled={formData.ingredients.length === 1}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() => addArrayItem('ingredients')}
            >
              Add Ingredient
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Instructions
            </Typography>
            {formData.instructions.map((instruction, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 1 }}>
                <TextField
                  fullWidth
                  multiline
                  value={instruction}
                  onChange={(e) => handleArrayChange(index, 'instructions', e.target.value)}
                  label={`Step ${index + 1}`}
                  required
                />
                <IconButton
                  onClick={() => removeArrayItem('instructions', index)}
                  disabled={formData.instructions.length === 1}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() => addArrayItem('instructions')}
            >
              Add Step
            </Button>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label="Prep Time (minutes)"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label="Cook Time (minutes)"
              name="cookTime"
              value={formData.cookTime}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="number"
              label="Servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tags (comma-separated)"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              {id ? 'Update Recipe' : 'Create Recipe'}
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/recipes')}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default RecipeForm; 