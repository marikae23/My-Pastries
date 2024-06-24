// backend/controllers/recipeController.js

const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res, next) => {
  try {
    const { title, description, ingredients, instructions, image } = req.body;
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      image,
      creator: req.userData.userId, // userId extraído do token JWT
    });
    const result = await newRecipe.save();
    res.status(201).json({ message: 'Receita criada com sucesso.', recipe: result });
  } catch (error) {
    next(error);
  }
};

exports.getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find().exec();
    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};
