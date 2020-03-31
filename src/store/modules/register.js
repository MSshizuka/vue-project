import {register} from '@/network/register'

export default {
  namespaced: true,
  state: {

  },
  actions: {// 发网络请求的
    async register({commit},payload) {
      const result = await register(payload);
      
      if (result.body.token) {
        localStorage.setItem('token', result.body.token);
        commit('setUser', result.body);
      } else {
        return new Promise((resolve, reject) => reject(result));
      }
    }
  },
  mutations: {// 同步状态的
    setUser(state, payload) {     
      this.state.username = payload.username
    }
  },
};