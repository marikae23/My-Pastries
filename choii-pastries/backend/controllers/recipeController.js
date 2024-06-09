const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
    const { title, ingredients, instructions, userId } = req.body;
    const recipe = new Recipe({ title, ingredients, instructions, user: userId });
    await recipe.save();
    res.status(201).send(recipe);
};

exports.getRecipes = async (req, res) => {
    const recipes = await Recipe.find().populate('user', 'username');
    res.send(recipes);
};

exports.rateRecipe = async (req, res) => {
    const { rating, userId } = req.body;
    const recipe = await Recipe.findById(req.params.id);
    recipe.ratings.push({ user: userId, rating });
    await recipe.save();
    res.send(recipe);
};
