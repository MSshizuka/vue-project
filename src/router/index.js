import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home';
import hooks from '@/router/hook.js'//获取路由全部钩子

import loadable from '@/utils/loading';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
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
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/index.vue')
    }
  ],
});
Object.values(hooks).forEach(hook => {
  router.beforeEach(hook)
})


export default router;
