import React,{useEffect, useState} from 'react'
import InsureCarInfo from './components/insureCarInfo'
import QuoteDetails from './components/QuoteDetails'
import { getQuotationRequestSummary } from '../../api/api/quotation'

const CarInfo = () => {
  const [ latestQuotationRequest, setLatestQuotationRequest] = useState({})
  const [ Quotation, setQuotation ] = useState([])

  useEffect(()=>{
    getQuotationRequestSummary().then(res => {
      console.log(res)
      setLatestQuotationRequest(res.data.latestQuotationRequest)
      setQuotation(res.data.Quotation)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  return (
    <>
      <InsureCarInfo data={latestQuotationRequest}/>
      <QuoteDetails data={Quotation}/>
    </>
  )
}

export default CarInfo