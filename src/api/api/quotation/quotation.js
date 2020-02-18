import api from '../../axios'

export const postQuotationRequest = () => {
  return api({
    url: '/v1/customer/quotationRequest',
    method: 'post'
  })
}