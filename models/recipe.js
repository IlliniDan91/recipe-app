const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  prepTime: {
    type: Number,
    required: [true, 'Preparation time is required'],
    min: [0, 'Preparation time cannot be negative']
  },
  cookTime: {
    type: Number,
    required: [true, 'Cooking time is required'],
    min: [0, 'Cooking time cannot be negative']
  },
  ingredients: [{
    type: String,
    required: [true, 'At least one ingredient is required'],
    trim: true
  }],
  instructions: [{
    type: String,
    required: [true, 'At least one instruction is required'],
    trim: true
  }],
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  }
}, {
  timestamps: true
});

// Add a pre-save middleware to log validation
recipeSchema.pre('save', function(next) {
  console.log('Attempting to save recipe:', this);
  next();
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe; 