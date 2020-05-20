/* eslint-disable consistent-return */
/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import QS from "qs";
import { message } from "antd";
// import store from "../web/store/index";

// 环境的切换
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV === "debug") {
  axios.defaults.baseURL = "";
} else if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "";
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          message.warning("登录重定向", 2);
          break;

        case 403:
          // 清除token
          // localStorage.removeItem("token");
          // store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          message.warning("登录过期，请重新登录", 2);
          break;
        // 404请求不存在
        case 404:
          message.warning("网络请求不存在", 2);
          break;
        // 其他错误，直接抛出错误提示
        default:
          message.warning(error.response.data.message, 2);
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
