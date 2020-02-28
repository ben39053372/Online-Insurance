import React,{useEffect} from 'react'
import { Paper, Typography, makeStyles, IconButton } from '@material-ui/core'
import quoteDetail from '../styles/quoteDetails';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SwipeableViews from 'react-swipeable-views';
import QuoteDetailComponent from './QuoteDetailsComponent'
import {getQuotationRequestList} from '../../../api/api/broker'

const useStyles = makeStyles(theme => quoteDetail(theme))

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

