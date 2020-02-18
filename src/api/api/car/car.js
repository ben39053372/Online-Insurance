import api from '../../axios'

export const getRegisterType = () => {
  return api({
    url: '/v1/car/registerTypeList',
    method: 'get',
  })
}

export const getbrandList = () => {
  return api({
    url: '/v1/car/brandList',
    method: 'get',
  })
}

export const getManufactureYearList = () => {
  return api({
    url: '/v1/car/manufactureYearList',
    method: 'get'
  })
}

export const getModelList = () => {
  return api({
    url: '',
    method: 'get'
  })
}

export const getBodyTypeList= () => {
  return api({
    url: '/v1/car/bodyTypeList',
    method: 'get'
  })
}