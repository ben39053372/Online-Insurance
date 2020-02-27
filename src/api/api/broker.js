import apiBroker from '../axiosBroker'

export const login = (loginId, password) => {
  return apiBroker({
    url: `/v1/broker/login/${loginId}`,
    method: 'put',
    data: {
      "loginPasswordMD5": password
    }
  })
}

export const forgotPassword = email => {
  return apiBroker({
    url: `/v1/broker/forgetPassword`,
    method: 'put',
    data: {
      email
    }
  })
}

export const resetPassword = (loginId,password) => {
  return apiBroker({
    url: `/v1/broker/resetPassword`,
    method: 'put',
    headers: {
      "Authorization": 'jwt3'
    },
    data: {
      loginId,
      "loginPasswordMD5": password
    }
  })
}

export const getQuotationRequestList = keyword => {
  return apiBroker({
    url: `/v1/broker/quotationRequestList`,
    method: 'get',
    params: {
      keyword: keyword || ''
    },
    headers: {
      'Authorization': localStorage.getItem('jwt1')
    }
  })
}

export const getQuotationRequestDetail = requestId => {
  return apiBroker({
    url: `/v1/broker/quotationRequest/${requestId}/detail`,
    method: 'get',
    headers: {
      "Authorization": 'jwt2'
    }
  })
}

export const getCompanyList = () => {
  return apiBroker({
    url: `/v1/broker/companyList`,
    method: 'get'
  })
}

export const getPlanList = () => {
  return apiBroker({
    url: `/v1/broker/insurancePlanTypeList`,
    method: 'get'
  })
}

export const putQuotationRequest = (requestId,data) => {
  return apiBroker({
    url: `/v1/broker/quotationRequest/${requestId}/Qoute`,
    method: 'put',
    data,
    headers: {
      "Authorization": 'jwt'
    }
  })
}