import React,{useEffect, useState} from 'react'
import InsureCarInfo from './components/insureCarInfo'
import QuoteDetails from './components/QuoteDetails'
import QuoteDetailsEmpty from './components/QuoteDetailsEmpty'
import { getQuotationRequestSummary } from '../../api/api/quotation'
import useStyles from '../../style/style'

const CarInfo = () => {
  const classes = useStyles()
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
      {/* {Quotation.length === 0 ? (
        <QuoteDetailsEmpty />
        // <QuoteDetails data={Quotation}/>
      ) : (
        
        // <QuoteDetailsEmpty />
      )} */}
    </>
  )
}

export default CarInfo