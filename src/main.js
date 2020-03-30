import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';// px2rem

Vue.prototype.$bus = new Vue();
 

const whiteList = ['/','/category']
router.beforeEach(async (to, from, next) => {
  console.log('-------------');
  
  if (whiteList.includes(to.path)) {
    return next();
  };

  //校验当前用户是否登录
  const isLogin = await store.dispatch('validate');
  if (isLogin) {
    if (to.name === 'login') {
      next('/profile');
    } else {
      next();
    };
  } else {
    const flag = to.matched.some(item => item.meta.needLogin);

    // if (from.path === '/login' && (to.path === '/cart' || to.path === '/profile')) {
    //   return;
    // };
    if (flag) {
      if (to.name !== 'login') {
        next('/login');
      }
      // return false;
    } else {
      next();
    }
  }
})


// with options
Vue.use(VueLazyload, {
  perload: 1.3,
  error: '/@/assets/img/common/error.jfif',
  loading: require('@/assets/img/common/placeholder.gif'),
  attempt: 1
})

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
