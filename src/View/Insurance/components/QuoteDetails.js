import React, { useState } from 'react'
import { Paper, Typography, LinearProgress, List, ListSubheader } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import QuoteDetailsComponent from './QuoteDetailsComponent'
import { useSelector } from 'react-redux'

const QuoteDetail = props => {
  const [index, setIndex] = useState(0)
  const handleChangeIndex = index => {
    setIndex(index)
  }
  const lang = useSelector(state=>state.lang)
  return (
    <Paper elevation={0} id="QuoteDetails">
      {props.data.length !== 0 &&
        <Typography align='center' style={{padding: '5px 0'}}>
          {lang==='eng'?'Quotations':'報價'}{index + 1 + '/' + props.data.length}
        </Typography>
      }
      {props.data.length === 0 && (
        <List style={{paddingBottom: '20px'}}>
          <ListSubheader disableSticky style={{background: '#922', margin: ''}}>{lang==='eng'?'Quotation detail':'報價詳情'}</ListSubheader>
          <Typography align="center">{lang==='eng'?'Waiting for quotation':'正在等待報價中'}</Typography>
          <Typography align="center">{lang==='eng'?'Quotation will be prepared within 48 hours.':'報價將於48小時內提供。'}</Typography>
          <LinearProgress color="secondary" />
          <Typography align="center">{lang==='eng'?'Our staff will follow the case of special-type car personally.':'特別車款類別將有專人為您跟進'}</Typography>

        </List>
      )}
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex} style={{ padding: '0 10px' }}>
        {props.data.map((item, index) => (
          <QuoteDetailsComponent key={item + index} item={item} index={index} />
        ))}
      </SwipeableViews>
    </Paper>
  )
}

export default QuoteDetail

