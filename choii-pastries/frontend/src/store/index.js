import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    user: null,
  },
  mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      const response = await axios.get('/api/recipes');
      commit('setRecipes', response.data);
    },
    async signup({ commit }, userData) {
      const response = await axios.post('/api/users/signup', userData);
      commit('setUser', response.data);
    },
    async login({ commit }, userData) {
      const response = await axios.post('/api/users/login', userData);
      commit('setUser', response.data);
    },
  },
});
