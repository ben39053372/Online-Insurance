import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  MenuItem
} from '@material-ui/core'

const InputLabelProps = {
  shrink: true,
}

const insureType = [
  { id: 0, nameCht: '全保', nameEn: 'Full' },
  { id: 1, nameCht: '三保', nameEN: 'Three' }
]

const ExpansionPanel3 = props => {
  return (
    <ExpansionPanel expanded={props.open === 3 + props.offset}>
      <ExpansionPanelSummary>
        <Typography>投保類別</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <TextField
            fullWidth
            InputLabelProps={InputLabelProps}
            label="網上購買汽車保險"
          />
          <TextField
            fullWidth
            select
            value={props.state.insureType}
            onChange={(e) => props.setState(state => ({
              ...state, insureType: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label="請選擇保險類別"
          >
            {insureType.map((item, i) => (
              <MenuItem key={item.nameCht} value={item.id}>{item.nameCht}</MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            value={props.state.insuredAmount}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, insuredAmount: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label="全保投保額(HK$) #"
          />
          <Fab variant="extended" onClick={props.prev} style={{ margin: '8px' }}>
            <Typography>上一步</Typography>
          </Fab>
          <Fab variant="extended" onClick={props.next} style={{ margin: '8px' }}>
            <Typography>下一步</Typography>
          </Fab>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanel3