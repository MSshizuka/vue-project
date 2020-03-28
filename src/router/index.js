import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';

import loadable from '@/utils/loading';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/category/index.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: loadable(() => import('@/views/cart/index.vue')),
    },
    {
      path: '/profile',
      name: 'profile',
      component: loadable(() => import('@/views/profile/index.vue')),
    },
    {
      path: '/detail/:iid',
      name: 'detail',
      component: () => import('@/views/detail/index.vue')
    },
  ],
});
