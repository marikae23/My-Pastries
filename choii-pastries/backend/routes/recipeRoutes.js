const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const checkAuth = require('../middleware/checkAuth'); // Middleware para verificação de autenticação

router.post('/', checkAuth, recipeController.createRecipe);

router.get('/', recipeController.getAllRecipes);

module.exports = router;
