import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import register from './modules/register';

import { login, validate } from '@/network/user.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    register
  },
  state: {
    cartList: [],
    isCheckedAll: true,
    username: ''
  },
  getters: {
    number(state) {
      let length = state.cartList.filter(item => item.isSure === true).length;
      if (length === 0) return;
      return `(${length})`;
    },
    count(state) {
      let length = state.cartList.filter(item => item.isSure === true).length;
      if (length === 0) return;
      return length;
    },
    totalPrice(state) {
      let ary = state.cartList.filter(item => item.isSure === true);
      if (ary.length === 0) {
        return '￥0.00'
      } else {
        return ary.reduce((prev, next) => prev + next.count * next.newPrice, 0.00).toFixed(2)
      }
    }
  },
  mutations: {
    deleteGoods(state) {
      let ary = state.cartList.filter(item => item.isSure === false);
      if (ary.length === 0) {
        state.cartList = [];
      } else {
        state.cartList = [];
        state.cartList.push(...ary);
      }
    },
    modifyGoodCount(state, payload) {
      if (payload.way === '+') {
        state.cartList.find(item => item.iid === payload.obj.iid).count += 1;
      } else if (payload.way === '-') {
        let item = state.cartList.find(item => item.iid === payload.obj.iid);
        if (item.count <= 1) {
          return
        } else {
          item.count -= 1;
        }
      }
    },
    makeSureSelected(state, payload) {
      state.cartList.find(item => item.iid === payload.obj.iid).isSure = !payload.obj.isSure;
      // console.log(this);
      this._mutations.defaultCheckAll[0](state);
      // if (state.cartList.every(item => item.isSure === true)) {
      //   state.isCheckedAll = true;
      // } else {
      //   state.isCheckedAll = false;
      // }
    },
    selectAll(state) {
      state.isCheckedAll = !state.isCheckedAll;
      if (state.cartList.length === 0) return;
      state.cartList.map(item => item.isSure = state.isCheckedAll)
    },
    defaultCheckAll(state) {
      if (state.cartList.every(item => item.isSure === true)) {
        state.isCheckedAll = true;
      } else {
        state.isCheckedAll = false;
      }
    },
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
    },
    setUsername(state, payload) {
      state.username = payload;
    }
  },
  actions: {
    async login({ commit }, userName) {
      const result = await login(userName);
      if (result.token) {
        localStorage.setItem('token', result.token);
        commit('setUsername', result.username);
        // this.$router.replace('/profile')
      } else {
        return Promise.reject('store/index-114line:' + result);
      }
    },
    async validate({ commit }) {
      const result = await validate();
      if (result.body) {
        if (result.code === 1) {
          return false;
        };
        commit('setUsername', result.body[0].username);
        localStorage.setItem('token', result.body[0].token);
        return true;
      } else {
        return false;
      }
    }
  },
});
