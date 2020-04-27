import axios from 'axios'

const request: any = {}

type ApiTypes = {
  base_url: string
}

declare const API_CONFIG: ApiTypes

const { base_url } = API_CONFIG

const ajaxUrl = base_url

request.axios = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
})

request.api = ajaxUrl
request.oauthUrl = ajaxUrl

export default request