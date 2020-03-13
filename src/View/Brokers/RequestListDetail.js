import React, { useEffect, useState } from 'react'
import InsureCarInfo from './conponents/CarInfo'
import QuoteDetails from './conponents/QuoteDetails'
import { getQuotationRequestDetail, delQuotation } from '../../api/api/broker'
import { useParams } from 'react-router-dom'
import { Button, Typography, Grid, Dialog, DialogActions, DialogTitle} from '@material-ui/core'
import dom2img from 'dom-to-image'
import { useHistory } from 'react-router-dom'

export default () => {
  let { id } = useParams()
  const history = useHistory()
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
    dom2img.toJpeg(dom, { quality: 0.8 })
      .then((dataUrl) => {
        let link = document.createElement('a');
        link.download = `quote_id${id}.jpeg`;
        link.href = dataUrl;
        link.click()
      })
  }
  const [open, setOpen] = useState(false)
  const DelAction = async () => {
    let delRes = await delQuotation(quote.quotationId)
    console.log(delRes)
    if(delRes.status === 200) {
      setOpen(false)
      history.replace('/Brokers/RequestList')
    }
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"確認刪除?"}</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            取消
          </Button>
          <Button onClick={DelAction} color="primary" autoFocus>
            確認
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container justify="center" alignItems="center">

        <Grid item xs={12}>
          <Typography align="center">報價車款資料</Typography>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Button
            variant="contained"
            color="secondary"
            style={{backgroundColor: '#339'}}
            onClick={print}
          >
            <Typography>
              列印資料
            </Typography>
          </Button>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Button onClick={()=> setOpen(true)} style={{backgroundColor: '#F00'}} color="secondary" variant="contained">
            <Typography>刪除</Typography>
          </Button>
        </Grid>

      </Grid>
      <div id="print">
        <InsureCarInfo data={quotationRequest} />
        <QuoteDetails data={quote} />
      </div>
    </>
  )
}