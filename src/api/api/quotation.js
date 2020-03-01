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
      'Authorization': `Bearer ${localStorage.getItem('jwt1')}`
    }
  })
}

export const putInterested = quoteId => {
  return api({
    url: `/v1/customer/quotation/${quoteId}/maskAsInterested`,
    method: 'put',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt1')}`
    }
  })
}

export const postClosing = (quoteId,file) => {
  let fd = new FormData()
  fd.append('invoiceImg',file)
  return api({
    url: `/v1/customer/quotation/${quoteId}/closing`,
    method: 'post',
    headers: {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('jwt1')}`
    },
    data: fd
  })
}