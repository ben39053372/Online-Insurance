import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import QuoteDetailComponent from './QuoteDetailsComponent'
import useStyles from '../../../style/style'

const QuoteDetail = props => {
  const classes = useStyles()
  return (
    <Paper elevation={0}>
      <Typography
        align="center"
        variant="subtitle1"
      >
        報價詳情
      </Typography>
      <QuoteDetailComponent data={props.data} />
    </Paper>
  )
}

export default QuoteDetail

