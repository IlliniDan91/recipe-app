const mongoose = require('mongoose');
const Recipe = require('../backend/models/recipe');

const sampleRecipes = [
  {
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh basil, mozzarella, and tomato sauce",
    prepTime: 20,
    cookTime: 15,
    ingredients: [
      "2 cups pizza flour",
      "1 cup fresh mozzarella",
      "1 cup tomato sauce",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1 tsp active dry yeast"
    ],
    instructions: [
      "Prepare pizza dough and let it rise for 1 hour",
      "Preheat oven to 450°F (230°C)",
      "Roll out dough and add toppings",
      "Bake for 12-15 minutes until crust is golden"
    ],
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop"
  },
  {
    title: "Chocolate Chip Cookies",
    description: "Soft and chewy chocolate chip cookies with a golden brown edge",
    prepTime: 15,
    cookTime: 12,
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 cup butter, softened",
      "3/4 cup sugar",
      "3/4 cup brown sugar",
      "2 large eggs",
      "2 cups chocolate chips",
      "1 tsp vanilla extract",
      "1 tsp baking soda"
    ],
    instructions: [
      "Cream butter and sugars until fluffy",
      "Beat in eggs and vanilla",
      "Mix in dry ingredients",
      "Drop spoonfuls onto baking sheet",
      "Bake at 375°F for 10-12 minutes"
    ],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop"
  },
  {
    title: "Fresh Garden Salad",
    description: "A light and refreshing salad with seasonal vegetables",
    prepTime: 15,
    cookTime: 0,
    ingredients: [
      "Mixed salad greens",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Avocado",
      "Balsamic vinaigrette",
      "Croutons",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Wash and chop all vegetables",
      "Combine ingredients in a large bowl",
      "Toss with dressing just before serving",
      "Season to taste"
    ],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/recipe_app', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Recipe.deleteMany({}); // Clear existing recipes
    const result = await Recipe.insertMany(sampleRecipes);
    console.log('Database seeded successfully:', result.length, 'recipes added');
    
    // Query and display the recipes to verify
    const recipes = await Recipe.find({});
    console.log('Current recipes in database:', recipes.length);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase(); 