// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import RecipeDetailView from '../views/RecipeDetailView.vue';
import CreateRecipeView from '../views/CreateRecipeView.vue';
import store from '../store'; 

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUsView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetail',
    component: RecipeDetailView
  },
  {
    path: '/create-recipe',
    name: 'CreateRecipe',
    component: CreateRecipeView,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated; 
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
    
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router;
