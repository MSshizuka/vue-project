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
      if (state.cartList.length === 0) {
        state.cartList.push(payload);
      } else {
      //   state.cartList.forEach(item => {
      //     if (item.iid === payload.iid) {
      //       item.count += payload.count;
      //     } else {
      //       state.cartList.push(payload);
      //     }
      //   })
      // }
        let isHad = state.cartList.find(item => item.iid === payload.iid);
        if (isHad) {
          isHad.count += payload.count;
        } else {
          state.cartList.push(payload);
        }
      }
    }
  }
});
