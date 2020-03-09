import React, { useEffect, useState } from 'react'
import { Paper, Typography, LinearProgress, List, ListSubheader } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import QuoteDetailsComponent from './QuoteDetailsComponent'
import useStyles from '../../../style/style'

const QuoteDetail = props => {
  const classes = useStyles()
  useEffect(() => {
    console.log(props)
  }, [])
  const [index, setIndex] = useState(0)
  const handleChangeIndex = index => {
    setIndex(index)
  }
  return (
    <Paper elevation={0}>
      {props.data.length !== 0 &&
        <Typography align='center'>
          報價{index + 1 + '/' + props.data.length}
        </Typography>
      }
      {props.data.length === 0 && (
        <List style={{paddingBottom: '20px'}}>
          <ListSubheader disableSticky style={{background: '#922', margin: ''}}>報價詳情</ListSubheader>
          <Typography align="center">正在等待報價中，</Typography>
          <Typography align="center">報價將於48小時內提供。</Typography>
          <LinearProgress color="secondary" />
          <Typography align="center">特別車款類別將有專人為您跟進</Typography>

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

