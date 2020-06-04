import React from 'react'
import { Paper } from '@material-ui/core'
import QuoteDetailComponent from './QuoteDetailsComponent'

const QuoteDetail = props => {
  return (
    <Paper elevation={0} style={{padding: '0 0 20px 0'}}>
      <QuoteDetailComponent data={props.data} />
    </Paper>
  )
}

export default QuoteDetail
