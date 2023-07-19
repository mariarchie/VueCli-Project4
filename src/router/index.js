import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import ProductDetails from '../views/ProductDetails.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetails },
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
