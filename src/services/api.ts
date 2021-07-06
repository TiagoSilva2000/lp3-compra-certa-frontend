import axios from 'axios'
import { serverUrl } from '../utils/constants'
import getToken from '../utils/getToken'

const api = axios.create({
  baseURL: serverUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'X-Custom-Header',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*'
  }
})

api.interceptors.request.use(
  config => {
    const token = getToken.withPrefix()
    if (token) {
      config.headers.Authorization = token
    }
    console.log({
      baseUrl: config.baseURL,
      path: config.url,
      method: config.method,
      headers: config.headers,
      extra: { ...config }
    })
    return config
  },
  err => Promise.reject(err)
)

export default api
