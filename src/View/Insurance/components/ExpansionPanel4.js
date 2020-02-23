import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  Checkbox
} from '@material-ui/core'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel4 = props => {
  return (
    <ExpansionPanel expanded={props.open === 4 + props.offset}>
      <ExpansionPanelSummary>
        <Typography>完成報價</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <Typography>只差一步!</Typography>
          <Typography>請提供您的聯絡資料方便我們即時提供報價消息!</Typography>
          <TextField
            vaule={props.state.email}
            InputLabelProps={InputLabelProps}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, email: value
              }))
            }}
            fullWidth
            label="您的電郵"
          />
          <TextField
            value={props.state.mobile}
            InputLabelProps={InputLabelProps}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, mobile: value
              }))
            }}
            fullWidth
            label="您的手提號碼"
          />
          <Checkbox
            defaultChecked
            value="secondary"
            color="primary"
          />
          <Typography variant='inherit'>我已閱讀條項與細則</Typography>
          <br/>
          <Fab variant="extended" onClick={props.prev} style={{ margin: '8px' }}>
            <Typography>上一步</Typography>
          </Fab>
          <Fab variant="extended" onClick={props.finish} style={{ margin: '8px' }}>
            <Typography>完成</Typography>
          </Fab>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanel4