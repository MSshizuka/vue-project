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
      meta: { needLogin: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: loadable(() => import('@/views/profile/index.vue')),
      meta: { needLogin: true }
    },
    {
      path: '/detail/:iid',
      name: 'detail',
      component: () => import('@/views/detail/index.vue')
    },
    {
      path: '/404',
      name: 'Error',
      component: () => import('@/views/error/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
  ],
});
