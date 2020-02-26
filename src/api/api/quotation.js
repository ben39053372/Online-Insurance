import api from '../axios'

export const postQuotationRequest = data => {
  return api({
    url: '/v1/customer/quotationRequest',
    method: 'post',
    data
  })
}

export const getTermsANdCondition = typeId => {
  return api({
    url: `/v1/misc/termsAndConditions/${typeId}`,
    method: 'get'
  })
}

export const getQuotationRequestSummary = () => {
  return api({
    url: '/v1/customer/quotationRequest/latest/summary',
    method: 'get',
    headers: {
      'Authorization': 'jwt1'
    }
  })
}

export const putInterested = quoteId => {
  return api({
    url: `/v1/customer/quotation/${quoteId}/maskAsInterested`,
    method: 'put',
    headers: {
      'Authorization': 'jwt1'
    }
  })
}

export const postClosing = quoteId => {
  return api({
    url: `/v1/customer/quotation/${quoteId}/closing`,
    method: 'post',
    headers
  })
}