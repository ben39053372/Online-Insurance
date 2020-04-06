import axios from 'axios';

const apiBroker = axios.create({
  // baseURL: 'http://203.186.46.106:36000',
  baseURL: 'https://insurance-api.heshecar.com',
  timeout: 10000,
  validateStatus: false
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


export default apiBroker