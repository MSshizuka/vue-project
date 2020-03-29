import axios from 'axios';
import { Toast } from 'cube-ui';

class AjaxRequest {
  constructor() {
    // this.baseURL = 'http://123.207.32.32:8000/api/h3';
    // this.baseURL = 'http://localhost:8008';
    this.baseURL = 'http://101.132.131.177:8008';
    // this.timeout = 5000;
    // this.toast = Toast.$create({
    //   txt: 'loading...',
    //   time: 0,
    // });
    // this.queue = {};
    // console.dir(this);
  }

  setInterceptor(instance, url) {
    instance.interceptors.request.use((config) => {
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
      console.log('请求出错了！！');
      
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
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout,
    };
    this.setInterceptor(instance, options.url);
    return instance(config);
  }
}

export default new AjaxRequest();
