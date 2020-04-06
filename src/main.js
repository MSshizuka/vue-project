import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';// px2rem
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'

Vue.use(VueDirectiveImagePreviewer)

Vue.prototype.$bus = new Vue();
 

const whiteList = ['/','/category']
router.beforeEach(async (to, from, next) => {
  // console.log('-------------');
  
  if (whiteList.includes(to.path)) {
    return next();
  };

  //校验当前用户是否过期
  let obj = {};
  if (!store.state.userData) {
    store.state.userData = JSON.parse(localStorage.getItem('userData'));
    store.state.userData ? obj = store.state.userData[0]: null;
  } else {
    obj = store.state.userData[0]
  };

  if (Array.isArray(JSON.parse(localStorage.getItem('cartData')))) {
    store.state.cartList = JSON.parse(localStorage.getItem('cartData'));
  };
  // console.log(store.state.cartList);
  
  

  
  // console.log('main.js:36',obj);
  
  const isLogin = await store.dispatch('validate', obj);
  // debugger
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
