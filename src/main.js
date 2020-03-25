import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';// px2rem

import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
 
// with options
Vue.use(VueLazyload, {
  error: '@/assets/img/common/error.jfif',
  loading: '@/assets/img/common/placeholder.gif'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
