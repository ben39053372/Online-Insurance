import React, {useState,useEffect} from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab
} from '@material-ui/core'

const ExpansionPanel4 = props => {
  const [completeState, setCompleteState] = useState({
    email: '',
    mobile: ''
  })
  useEffect(()=>{
    console.log(props)
  })
  return (
    <ExpansionPanel expanded={props.open === 3+props.offset}>
        <ExpansionPanelSummary>
          <Typography>完成報價</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>只差一步!請提供您的聯絡資料方便我們即時提供報價消息!</Typography>
            <TextField
              vaule={completeState.email}
              fullWidth
              label="您的電郵"
            />
            <TextField
              value={completeState.mobile}
              fullWidth
              label="您的手提號碼"
            />
            <Fab variant="extended" onClick={props.prev} style={{ margin: '8px' }}>
              <Typography>上一步</Typography>
            </Fab>
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>完成</Typography>
            </Fab>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  )
}

export default ExpansionPanel4