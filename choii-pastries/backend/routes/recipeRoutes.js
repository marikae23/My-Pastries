// backend/routes/recipes.js

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const checkAuth = require('../middleware/checkAuth'); // Middleware para verificação de autenticação

// Rota para criação de receita (requer autenticação)
router.post('/', checkAuth, recipeController.createRecipe);

// Rota para obter todas as receitas
router.get('/', recipeController.getAllRecipes);

module.exports = router;
