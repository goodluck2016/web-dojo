import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

const HTTP_TIMEOUT = 1000 * 60; // 请求超时时间1分钟

Vue.http.options.emulateJSON = true;

let _buildOptions = (method, options) => {
  return options;
};

let _request = (method, url, data, options) => {
  let reqestOptions = {
    method: method,
    body: data,
    url: url
  };
  if (options.headers) {
    reqestOptions.headers = options.headers;
  }
  if (options.params) {
    reqestOptions.params = options.params;
  }
  return Vue.http(reqestOptions)
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data;
    })
    .catch(reason => {
      console.log(reason);
    });
};

export const ajax = {
  /**
   * GET data
   * @param url api地址
   * @param options 配置项
   */
  get(url, options) {
    return _request('get', url, null, _buildOptions('get', options));
  },
  /**
   * DELETE data
   * @param url api地址
   * @param options 配置项
   */
  delete(url, options) {
    return _request('delete', url, null, _buildOptions('delete', options));
  },
  /**
   * POST data
   * @param url api地址
   * @param options 配置项
   */
  post(url, data, options) {
    return _request('post', url, null, _buildOptions('post', options));
  },
  /**
   * PUT data
   * @param url api地址
   * @param options 配置项
   */
  put: (url, data, options) => {
    return _request('put', url, data, _buildOptions('put', options));
  }
};