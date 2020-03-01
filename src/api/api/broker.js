import apiBroker from '../axiosBroker'
import md5 from 'md5'

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

export const resetPassword = (password) => {
  return apiBroker({
    url: `/v1/broker/resetPassword`,
    method: 'put',
    headers: {
      "Authorization": 'Bearer ' + localStorage.getItem('jwt3')
    },
    data: {
      "loginPasswordMD5": md5(password)
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
      'Authorization': 'Bearer ' +localStorage.getItem('jwt2')
    }
  })
}

export const getQuotationRequestDetail = requestId => {
  return apiBroker({
    url: `/v1/broker/quotationRequest/${requestId}/detail`,
    method: 'get',
    headers: {
      "Authorization": 'Bearer ' +localStorage.getItem('jwt2')
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
    url: `/v1/broker/quotationRequest/${requestId}/quote`,
    method: 'put',
    data,
    headers: {
      "Authorization": 'Bearer ' +localStorage.getItem('jwt2')
    }
  })
}