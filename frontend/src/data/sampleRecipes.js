const sampleRecipes = [
  {
    _id: '1',
    title: 'Classic Spaghetti Carbonara',
    description: 'A traditional Italian pasta dish made with eggs, cheese, pancetta and black pepper.',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale, diced',
      '4 large eggs',
      '100g Pecorino Romano, grated',
      '100g Parmigiano Reggiano, grated',
      'Black pepper, freshly ground',
      'Salt'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package instructions',
      'While pasta cooks, fry pancetta in a large pan until crispy',
      'In a bowl, whisk eggs and mix in grated cheeses and black pepper',
      'Drain pasta, reserving some pasta water',
      'Mix hot pasta with pancetta, then quickly stir in egg mixture',
      'Add pasta water if needed to create a creamy sauce'
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    tags: ['Italian', 'Pasta', 'Main Course'],
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800'
  },
  {
    _id: '2',
    title: 'Chocolate Chip Cookies',
    description: 'Soft and chewy chocolate chip cookies that are perfect with a glass of milk.',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 cup butter, softened',
      '3/4 cup sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '1 tsp vanilla extract',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Cream together butter and sugars until smooth',
      'Beat in eggs and vanilla',
      'Mix in flour, baking soda, and salt',
      'Stir in chocolate chips',
      'Drop rounded tablespoons onto ungreased baking sheets',
      'Bake for 10-12 minutes or until golden brown'
    ],
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    tags: ['Dessert', 'Cookies', 'Baking'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800'
  }
];

export default sampleRecipes; 