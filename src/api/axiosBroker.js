import axios from 'axios';

const apiBroker = axios.create({
  baseURL: 'http://203.186.46.106:36000',
  timeout: 10000,
})

apiBroker.interceptors.request.use(
  config => {
    config.headers['HSCInsuranceApiKey'] = 'broker'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

apiBroker.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default api