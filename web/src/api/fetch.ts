import qs from 'qs'
import request from '../helper/axios'

interface ConfigTypes {
  isLoading?: boolean
}

interface Params {
  isLoading?: boolean
  extraErrors?: any[]
}

request.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

request.axios.interceptors.request.use((config: ConfigTypes) => {
  const isLoading = config.isLoading || config.isLoading === undefined
  if(isLoading) {
    // 开启Loading
  }
  // 获取token
}, (err: any) => Promise.reject(err))



request.axios.interceptors.response.use((response: any) => {
  if (response.status && response.status == 200 && response.data.message == 'error') {
    // tip 提示
    return;
  }
  // 如果后端有新的token则重新缓存
  const newToken: string = response.headers['new-token']
  if (newToken) {
    // 存入缓存
  }
  // 关闭loading
  closeLoading()
  return response
}, (error: any) => {
  const res = error.response
  let extraErrors = res.config.extraErrors || res.config.params.extraErrors || []
  const { code = 500 } = res ? res.data : {}
  if(extraErrors.includes(code)) {
    switch (code) {
      case 401:
        // 无token 禁止访问
        break
      case 404:
        console.log('查询信息不存在')
        break
      case 500:
        console.log(res.data.message || '服务器开了一会小差~', 'error')
        break
      default:
        console.log(res.data.message)
    }
  }

   // 关闭loading
   closeLoading()
   return Promise.reject(error)
})

export default {
  post (url: string, params: Params = {}) {
    const { isLoading = true, extraErrors = [] } = params

    return request.axios({
      method: 'post',
      url,
      data: qs.stringify(params),
      timeout: 30000,
      isLoading,
      extraErrors,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },

  get (url: string, params:Params = {}) {
    const { isLoading = true, extraErrors = [] } = params

    return request.axios({
      method: 'get',
      url,
      params,
      // `paramsSerializer`是一个可选的函数，负责序列化`params`.
      paramsSerializer: (query: any) => qs.stringify(query),
      isLoading,
      extraErrors
    })
  },

  delete (url: string, params:Params = {}) {
    const { isLoading = true, extraErrors = [] } = params
    return request.axios({
      method: 'delete',
      url,
      params,
      isLoading,
      extraErrors
    })
  },

  put (url: string, params:Params = {}) {
    const { isLoading = true, extraErrors = [] } = params
    return request.axios({
      method: 'put',
      url,
      data: qs.stringify(params),
      isLoading,
      extraErrors,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

/**
 * 关闭loading
 */
function closeLoading () {
  // 延迟100毫秒关闭
  setTimeout(() => {
    // 关闭loading

  }, 100)
}