import axios from 'axios'

// 拦截request,设置全局请求为ajax请求
// request.interceptors.request.use((config) => {
//   config.headers['X-Requested-With'] = 'XMLHttpRequest';
//   return config
// });
// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  const data = response.data;
// 根据返回的code值来做不同的处理（和后端约定）
  switch (data.code) {
    case 200:
      return data;
      break;
    default:
      console.log(response);
      const error = new Error(data.msg);
      error.data = data;
      error.response = response;
      throw error;
  }
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break
      case 401:
        err.message = '未授权，请登录'
        break
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break
      case 408:
        err.message = '请求超时'
        break
      case 500:
        err.message = '服务器内部错误'
        break
      case 501:
        err.message = '服务未实现'
        break
      case 502:
        err.message = '网关错误'
        break
      case 503:
        err.message = '服务不可用'
        break
      case 504:
        err.message = '网关超时'
        break
      case 505:
        err.message = 'HTTP版本不受支持'
        break
      default:
        err.message = err.data.msg;
    }
  }
  return Promise.reject(err)
})

let base = '';
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: JSON.stringify(params),
    // transformRequest: [function (headers,data) {
    //   let ret = ""
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
    //   }
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  });
}
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    headers: {

    }
  });
}


