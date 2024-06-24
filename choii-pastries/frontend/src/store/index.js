import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userProfile: null,
    recipesSent: [
      {
        id: 1,
        title: 'Chocolate Cake',
        description: 'Delicious and rich chocolate cake perfect for dessert.',
        imageUrl: 'path/to/chocolate-cake.jpg' // Substitua pelo caminho real da imagem
      },
      {
        id: 2,
        title: 'Caesar Salad',
        description: 'Fresh and healthy Caesar salad with a creamy dressing.',
        imageUrl: 'path/to/caesar-salad.jpg' // Substitua pelo caminho real da imagem
      },
      {
        id: 3,
        title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
        imageUrl: 'path/to/spaghetti-carbonara.jpg' // Substitua pelo caminho real da imagem
      }
      // Adicione mais receitas conforme necessário
    ],
    savedRecipes: [],
    recipe: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserProfile(state, profile) {
      state.userProfile = profile;
    },
    setRecipesSent(state, recipes) {
      state.recipesSent = recipes;
    },
    setSavedRecipes(state, recipes) {
      state.savedRecipes = recipes;
    },
    setRecipe(state, recipe) {
      state.recipe = recipe;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post('http://localhost:5000/auth/login', { username, password });
        commit('setUser', response.data.user);
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    async signup({ commit }, { username, password }) {
      try {
        const response = await axios.post('http://localhost:5000/auth/signup', { username, password });
        commit('setUser', response.data.user);
      } catch (error) {
        throw new Error('Signup failed');
      }
    },
    async fetchRecipe({ commit }, recipeId) {
      try {
        const response = await axios.get(`http://localhost:5000/api/recipes/${recipeId}`);
        commit('setRecipe', response.data);
      } catch (error) {
        throw new Error('Failed to fetch recipe');
      }
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    user: state => state.user,
    userProfile: state => state.userProfile,
    recipesSent: state => state.recipesSent,
    savedRecipes: state => state.savedRecipes,
    recipe: state => state.recipe
  }
});
