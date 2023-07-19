import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/style.scss';

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
});

