import React,{useEffect} from 'react'
import { Paper, Typography, Grid, makeStyles, Button, IconButton } from '@material-ui/core'
import quoteDetail from '../styles/quoteDetails';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SwipeableViews from 'react-swipeable-views';
import QuoteDetailComponent from './QuoteDetailsComponent'
import {getQuotationRequestList} from '../../../api/api/broker'

const setting = [
  ['投保「全保」', '(包括第三者責任保險)'],
  ['特惠一年保養'],
  ['General Excess', '自身車輛財物損毀'],
  ['Theft Loss Excess', '全車被盗'],
  ['Parking', '自身車輛財物損毀', '於停泊時'],
  ['TPPD', '第三者財物損失-投保人'],
  ['TPPD-Y', '財物損失-低於25歲之司機'],
  ['TPPD-I', '財物損失-少於2年駕駛經驗'],
  ['TPPD-U', '財物損失-不記名司機']
]

const useStyles = makeStyles(theme => quoteDetail(theme))

var quote = []



const QuoteDetail = () => {
  const classes = useStyles()
  useEffect(() => {
    getQuotationRequestList().then(res => {
      console.log(res)
    })
  }, [])
  return (
    <Paper elevation={0}>
      <Typography align="center" variant="subtitle1" style={{ padding: '10px', marginTop: '16px' }}>
        <IconButton aria-label="delete" className={classes.margin}>
          <ArrowBackIosIcon />
        </IconButton>
        報價詳情
        <IconButton aria-label="delete" className={classes.margin}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Typography>
      <SwipeableViews>

        <QuoteDetailComponent/>
        <QuoteDetailComponent/>
      </SwipeableViews>
    </Paper>
  )
}

export default QuoteDetail

