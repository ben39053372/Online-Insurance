import React, { useEffect, useState } from 'react'
import InsureCarInfo from './components/insureCarInfo'
import QuoteDetails from './components/QuoteDetails'
import { getQuotationRequestSummary } from '../../api/api/quotation'
import useStyles from '../../style/style'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Fab } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux'

const CarInfo = () => {
  const classes = useStyles()
  const [latestQuotationRequest, setLatestQuotationRequest] = useState({})
  const [Quotation, setQuotation] = useState([])
  const [dialog, setDialog] = useState(true)
  const lang = useSelector(s=>s.lang)
  useEffect(() => {
    getQuotationRequestSummary().then(res => {
      // console.log(res)
      setLatestQuotationRequest(res.data.latestQuotationRequest)
      setQuotation(res.data.Quotation)
    })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const [scrollView, setScrollView] = useState(true)
  const handleScroll = (e) => {
    if(document.documentElement.scrollTop < document.body.scrollHeight*0.25) {
      setScrollView(true)
    }else {
      setScrollView(false)
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
  },[])
  const scrollToAnchor = name => {
    if(name){
      // console.log(name)
      let element = document.getElementById(name)
      // console.log(element)
      if(element){
        element.scrollIntoView({block:'start', behavior: 'smooth'})
      }
    }
  }
  return (
    <>
      <Dialog open={dialog} onClose={() => setDialog(false)} fullWidth>
        <DialogTitle className={classes.DialogTitle}>
        {lang==='eng'?'Latest quotation status':'最新報價狀態'}
        </DialogTitle>
        <DialogContent>
          <Typography>{lang==='eng'?'Time remaining(hour)':'剩餘時間(小時)'}</Typography>
          <DialogContentText>
            <Typography align="right">{latestQuotationRequest.countDownHour}</Typography>
          </DialogContentText>
          <Typography>{lang==='eng'?'Quotation received':'已收到報價'}</Typography>
          <DialogContentText>
            <Typography align="right">{Quotation.length}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setDialog(false)} color="primary" autoFocus>
            {lang==='eng'?'Confirm':'確認'}
          </Button>
        </DialogActions>
      </Dialog>
      <InsureCarInfo data={latestQuotationRequest} />
      <QuoteDetails data={Quotation} />
      {scrollView && (
        <Fab 
          variant="extended" 
          onClick={() => scrollToAnchor('QuoteDetails')} 
          style={{
            position: 'fixed', 
            bottom: '5%', 
            right: '5%', 
            background: '#922', 
            color: '#FFF'
          }}
        >
          <ExpandMoreIcon/>
          {lang==='eng'?'Check Quotation':'查看報價'}
        </Fab>
      )}
    </>
  )
}

export default CarInfo