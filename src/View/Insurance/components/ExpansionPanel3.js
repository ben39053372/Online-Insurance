import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab
} from '@material-ui/core'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel3 = props => {
  return (
    <ExpansionPanel expanded={props.open === 2+props.offset}>
        <ExpansionPanelSummary>
          <Typography>投保類別</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <TextField
              fullWidth
              // onChange={}
              InputLabelProps={InputLabelProps}
              label="網上購買汽車保險"
            />
            <TextField
              fullWidth
              InputLabelProps={InputLabelProps}
              label="請選擇保險類別"
            />
            <TextField
              fullWidth
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