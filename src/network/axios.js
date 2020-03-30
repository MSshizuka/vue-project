import axios from 'axios';
import { Toast } from 'cube-ui';

class AjaxRequest {
  constructor() {
    // this.baseURL = 'http://123.207.32.32:8000/api/h3';
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8008' : '/';
    // this.baseURL = 'http://101.132.131.177:8008';
    this.timeout = 5000;
    // axios.defaults.withCredentials = true;//=>允许跨域携带cookie请求
    // axios.defaults.transformRequest = data => {
    //     let str = ``;
    //     if (data && typeof data === 'object') {
    //         for (let attr in data) {
    //             if (data.hasOwnProperty(attr)) {
    //                 str += `${attr}=${data[attr]}&`;
    //             }
    //         }
    //     }
    //     return str.substring(0, str.length - 1);
    // };
    // axios.defaults.headers['Content-Type'] = 'x-www-form-urlencoded';
    // axios.interceptors.response.use(result => result.data);
    // this.toast = Toast.$create({
    //   txt: 'loading...',
    //   time: 0,
    // });
    // this.queue = {};
    // console.dir(this);
  }

  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = localStorage.getItem('token');
      // if (Object.keys(this.queue).length === 0) {
      //   this.toast.show();
      // }
      // this.queue[url] = url;
      // console.dir(instance);
      return config;
    }, err => Promise.reject(err));

    instance.interceptors.response.use((response) => {
      // delete this.queue[url];
      // if (Object.keys(this.queue).length === 0) {
      //   this.toast.hide();
      // }
      return response.data;
    }, (err) => {      
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误';
            break;
          case 401:
            err.message = '未授权的访问';
            break;
          default:
            err.message = '请求出错，请重试';
            break;
        }
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
