import React,{ useEffect, useState } from 'react'
import InsureCarInfo from './conponents/CarInfo'
import QuoteDetails from './conponents/QuoteDetails'
import { getQuotationRequestDetail } from '../../api/api/broker'
import { useParams } from 'react-router-dom'
import useStyles from '../../style/style'

export default () => {
  const classes = useStyles()
  let {id} = useParams()
  const [quotationRequest, setQuotationRequest] = useState({})
  const [quote, setQuote] = useState({})
  useEffect(() => {
    getQuotationRequestDetail(id).then(res => {
      console.log(res.data)
      setQuotationRequest(res.data.quotationRequest)
      setQuote(res.data.quote)
    })
  }, [id])
  return (
    <>
      <InsureCarInfo data={quotationRequest}/>
      <QuoteDetails data={quote}/>
    </>
  )
}