//路由相关钩子, 全局钩子
import store from '@/store'

export default {
  //取消令牌
  cancelToken:(to, from, next) => {
    store.commit('clearToken');
    next()
  },
  //权限校验
  permission: (to, from, next) => {
    // console.log('权限校验');
    next()
  }
}