import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import QuoteDetailsComponent from './QuoteDetailsComponent'
import useStyles from '../../../style/style'

const QuoteDetail = props => {
  const classes = useStyles()
  return (
    <Paper elevation={0}>
      <Typography align="center" variant="subtitle1">
        報價詳情
      </Typography>
      <SwipeableViews>
        {props.data.map((item, index) => {
          return (
            <QuoteDetailsComponent key={item+index} item={item} index={index} />
          )
        })}
      </SwipeableViews>
    </Paper>
  )
}

export default QuoteDetail

