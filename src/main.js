import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';// px2rem

Vue.prototype.$bus = new Vue();
 
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
