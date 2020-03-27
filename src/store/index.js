import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
  },
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state, payload) {
      state.cartList.push(payload);
    }
  }
});
