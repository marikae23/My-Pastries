const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ratings: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, rating: Number }]
});

module.exports = mongoose.model('Recipe', RecipeSchema);
