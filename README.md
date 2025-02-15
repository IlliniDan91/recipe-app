# Recipe Management Application

A modern web application for creating, storing, and managing recipes. Built with React and Material-UI, this application provides an intuitive interface for home cooks to organize their favorite recipes.

## Features

- Create and edit recipes with detailed information
- Store recipe details including:
  - Title and description
  - Ingredients list
  - Step-by-step instructions
  - Preparation and cooking time
  - Serving size
  - Tags for easy categorization
  - Recipe images
- Responsive design that works on desktop and mobile devices
- Clean and intuitive user interface using Material-UI components

## Technologies Used

- Frontend:
  - React.js
  - Material-UI (MUI)
  - React Router
- Backend:
  - Node.js/Express (API)
  - MongoDB (Database)

## Installation

1. Clone the repository:

   cd recipe-app

1. Install dependencies:

   npm install

1. Create a `.env` file in the backend directory with your MongoDB connection string:

   MONGODB_URI=your_mongodb_connection_string
   PORT=5000

1. Start the development servers:

   ```bash
   # Start backend server (from backend directory)
   npm start

   # Start frontend development server (from frontend directory)
   npm start
   ```

The application will be available at `http://localhost:3000`

## Usage

1. **Creating a Recipe**
   - Click "Create New Recipe" button
   - Fill in the recipe details including title, description, ingredients, and instructions
   - Add optional details like prep time, cook time, servings, and tags
   - Submit the form to save your recipe

2. **Editing a Recipe**
   - Navigate to the recipe you want to edit
   - Click the "Edit" button
   - Modify the recipe details
   - Save your changes

3. **Viewing Recipes**
   - Browse all recipes on the main page
   - Use tags to filter recipes
   - Click on a recipe card to view full details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/your-username/recipe-app](https://github.com/your-username/recipe-app)

## Acknowledgments

- Material-UI for the component library
- React team for the amazing framework
- All contributors who help improve this project
