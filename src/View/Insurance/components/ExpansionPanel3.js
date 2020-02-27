import React,{useEffect,useState} from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  MenuItem,
  InputLabel
} from '@material-ui/core'
import Terms from './TermsAndCondition'

const InputLabelProps = {
  shrink: true,
}

const insureType = [
  { id: 0, nameCht: '全保', nameEn: 'Full' },
  { id: 1, nameCht: '三保', nameEN: 'Three' }
]



const ExpansionPanel3 = props => {
  const [termOpen, setTermOpen] = useState(false)
  useEffect(()=>{

  },[])
  const handleTermsClick = () => {
    setTermOpen(true)
  }
  
  const handleTermsClose = () => {
    setTermOpen(false)
  }
  return (
    <ExpansionPanel expanded={props.open === 3 + props.offset}>
      <ExpansionPanelSummary>
        <Typography>投保類別</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Terms open={termOpen} onClose={handleTermsClose} />
        <div>
          <InputLabel>網上購買汽車保險</InputLabel>
          <Fab size="medium" variant="extended" onClick={handleTermsClick} style={{float: 'right'}}>了解更多</Fab>
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