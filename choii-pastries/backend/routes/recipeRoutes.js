const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/', recipeController.createRecipe);
router.get('/', recipeController.getRecipes);
router.post('/:id/rate', recipeController.rateRecipe);

module.exports = router;
