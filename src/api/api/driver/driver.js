import api from '../../axios'

export const getRoleList = () => {
  return api({
    url: '/v1/driver/roleList',
    method: 'get'
  })
}

export const getJobIndustryList = () => {
  return api({
    url: '/v1/driver/jobIndustryList',
    method: 'get'
  })
}

export const getOcupationList = (id) => {
  return api({
    url: `/v1/driver/${id || 1}/ocupationList`,
    method: 'get'
  })
}

export const getNoClaimDiscountList = () => {
  return api({
    url: '/v1/driver/NoClaimDiscountList',
    method: 'get'
  })
}