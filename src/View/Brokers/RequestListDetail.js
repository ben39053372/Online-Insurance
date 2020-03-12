import React, { useEffect, useState } from 'react'
import InsureCarInfo from './conponents/CarInfo'
import QuoteDetails from './conponents/QuoteDetails'
import { getQuotationRequestDetail } from '../../api/api/broker'
import { useParams } from 'react-router-dom'
import useStyles from '../../style/style'
import { Button, Typography } from '@material-ui/core'
import dom2img from 'dom-to-image'

export default () => {
  const classes = useStyles()
  let { id } = useParams()
  const [quotationRequest, setQuotationRequest] = useState({})
  const [quote, setQuote] = useState({})
  useEffect(() => {
    getQuotationRequestDetail(id).then(res => {
      console.log(res.data)
      setQuotationRequest(res.data.quotationRequest)
      setQuote(res.data.quote)
    })
  }, [id])
  const print = () => {
    let dom = document.getElementById('print');
    dom2img.toJpeg(dom, {quality: 0.8})
      .then((dataUrl) => {
        let link = document.createElement('a');
        link.download = `quote_id${id}.jpeg`;
        link.href = dataUrl;
        link.click()
      })
  }
  return (
    <>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={print} 
        style={{
          position: 'fixed', 
          left: '3vw', 
          top: '10%', 
          zIndex: '999999'
        }}
      >
        <Typography>
          列印資料
        </Typography>
      </Button>
      <div id="print">
        <InsureCarInfo data={quotationRequest} />
        <QuoteDetails data={quote} />
      </div>
    </>
  )
}