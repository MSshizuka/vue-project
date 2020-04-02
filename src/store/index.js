import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart';
import register from './modules/register';

import { login, validate } from '@/network/user.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    register
  },
  state: {
    cartList: [],
    isCheckedAll: true,
    userData: null
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
      };
      localStorage.setItem('cartData',JSON.stringify(state.cartList));
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
      };
      localStorage.setItem('cartData',JSON.stringify(state.cartList));
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
      localStorage.setItem('cartData',JSON.stringify(state.cartList));
    },
    selectAll(state) {
      state.isCheckedAll = !state.isCheckedAll;
      if (state.cartList.length === 0) return;
      state.cartList.map(item => item.isSure = state.isCheckedAll);
      localStorage.setItem('isCheckedAll', state.isCheckedAll);
      localStorage.setItem('cartData',JSON.stringify(state.cartList));
    },
    defaultCheckAll(state) {
      if (state.cartList.every(item => item.isSure === true)) {
        state.isCheckedAll = true;
      } else {
        state.isCheckedAll = false;
      };
      localStorage.setItem('isCheckedAll', state.isCheckedAll);
    },
    addToCart(state, payload) {
      if (state.cartList.length === 0) {       
        state.cartList.push(payload);
      } else {
        let isHad = state.cartList.find(item => item.iid === payload.iid);
        if (isHad) {
          isHad.count += payload.count;
        } else {
          state.cartList.push(payload);
        }
      };
      this._mutations.defaultCheckAll[0](state);
      localStorage.setItem('cartData',JSON.stringify(state.cartList));
    },
    setUser(state, payload) {     
      state.userData = payload
    },
    init(state) {
      // console.log(Object.keys(state));
      state.cartList = [];
    }
  },
  actions: {
    async login({ commit }, payload) {
      const result = await login(payload);
      if (result.token) {
        commit('setUser', result.data);
        localStorage.setItem('token', result.token);
        localStorage.setItem('userData', JSON.stringify(result.data));
      };
      return new Promise((resolve, reject) => {
        if (result.token) {
          resolve(result.code);
        } else {
          reject(result.code);
        }
      });
    },
    
    async validate({ commit }, payload) {
      const result = await validate(payload);

      if (result.code === 0) {
        commit('setUser', result.data);
        localStorage.setItem('token', result.token);
        localStorage.setItem('userData', JSON.stringify(result.data));
        return true;
      } else {
        return false
      }
    }
  },
});
