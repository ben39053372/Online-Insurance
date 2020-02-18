import axios from 'axios';

const api = axios.create({
  baseURL: 'http://203.186.46.106:36000',
  timeout: 10000,
})

api.interceptors.request.use(
  config => {
    config.headers['HSCInsuranceApiKey'] = 'customer'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default api