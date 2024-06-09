import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/menu', name: 'menu', component: MenuView },
  { path: '/about-us', name: 'about-us', component: AboutUsView },
  { path: '/login', name: 'login', component: LoginView },
];

const router = new VueRouter({
  routes,
});

export default router;
