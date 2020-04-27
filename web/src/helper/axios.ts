import axios from 'axios'

const request: any = {}

const ajaxUrl = process.env.DEV_BASE_URL

request.axios = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
})

request.api = ajaxUrl
request.oauthUrl = ajaxUrl

export default request