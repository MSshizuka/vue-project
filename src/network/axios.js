import axios from 'axios';
import store from '@/store'

class AjaxRequest {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8008' : 'http://101.132.131.177:8008';
    this.timeout = 5000;
  }

  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
      let cancelToken = axios.CancelToken;
      config.cancelToken = new cancelToken(function(c) {
        store.commit('pushToken', c);
      })
      config.headers.Authorization = localStorage.getItem('token');
      return config;
    }, err => Promise.reject(err));

    instance.interceptors.response.use((response) => {
      return response.data;
    }, (err) => {
      if (err && err.response) {
        err.message = '请求出错，请重试';
      }
      return Promise.reject(err);
    });
  }

  request(options) {
    const instance = axios.create();
    const config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options,
    };
    this.setInterceptor(instance, options.url);
    return instance(config);
  }
}

export default new AjaxRequest();
