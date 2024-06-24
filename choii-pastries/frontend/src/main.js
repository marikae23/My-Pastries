import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Importar o Vuex store

Vue.config.productionTip = false;

new Vue({
  router,
  store,  // Adicionar o store ao Vue instance
  render: h => h(App),
}).$mount('#app');

document.title = 'Choii Pastries';
