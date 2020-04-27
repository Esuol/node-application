import axios from 'axios'

const request: any = {}

const ajaxUrl = 'http://www.baidu.com/'
console.log('ajaxUrl', ajaxUrl)

request.axios = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
})

request.api = ajaxUrl
request.oauthUrl = ajaxUrl

export default request