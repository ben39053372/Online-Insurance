import React, { useState } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  MenuItem,
  InputLabel,
  Grid,
  Collapse
} from '@material-ui/core'
import Terms from './TermsAndCondition'
import useStyles from '../../../style/style'
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux'

const InputLabelProps = {
  shrink: true,
}

const insureType = [
  { id: 1, nameCht: '全保', nameEn: 'Full' },
  { id: 2, nameCht: '三保', nameEn: 'Three' }
]

const ExpansionPanel3 = props => {
  const classes = useStyles()
  const lang = useSelector(state => state.lang)
  const [ErrorOpen, setErrorOpen] = useState(false)
  const [errorState, seterrorState] = useState(false)
  const [commited, setCommited] = useState(false)
  const [termOpen, setTermOpen] = useState(false)
  const handleTermsClick = () => {
    setTermOpen(true)
  }
  const handleTermsClose = () => {
    setTermOpen(false)
  }
  const valid = () => {
    setCommited(true)
    if (props.state.insuredAmount === '') {
      seterrorState('Please Input all info')
      setErrorOpen(true)
    } else {
      seterrorState('')
      setErrorOpen(false)
      props.next()
    }
  }
  return (
    <ExpansionPanel expanded={props.open === 3}>
      <ExpansionPanelSummary>
        <Typography>{lang==='eng'?'Insurance type':'投保類別'}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Terms open={termOpen} onClose={handleTermsClose} />
        <div className={classes.ExpansionPanelDetails}>
          <InputLabel>{lang==='eng'?'Online car insurance':'網上購買汽車保險'}</InputLabel>
          <Fab className={classes.comprehendFab} size="medium" variant="extended" onClick={handleTermsClick} >{lang==='eng'?'Learn more':'了解更多'}</Fab>
          <TextField
            fullWidth
            select
            value={props.state.insureType}
            onChange={(e) => props.setState(state => ({
              ...state, insureType: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'?'Please select insurance type':'請選擇保險類別'}
          >
            {insureType.map((item, i) => (
              <MenuItem key={item.nameCht} value={item.id}>
                {lang==='eng'?item.nameEn: item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            error={commited && props.state.insuredAmount === ''}
            value={props.state.insuredAmount}
            type="number"
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, insuredAmount: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'?'Insured amount(HK$)':'全保投保額(HK$) #'}
          />
          <Collapse in={ErrorOpen}>
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              {errorState.toString()}
            </Alert>
          </Collapse>
          <Grid container>
            <Grid item xs={6}>
              <Fab className={classes.PrevButton} variant="extended" onClick={props.prev}>
                <Typography>{lang==='eng'?'Previous step':'上一步'}</Typography>
              </Fab>
            </Grid>
            <Grid item xs={6}>
              <Fab 
                className={classes.NextButton} 
                variant="extended" 
                // onClick={props.next}
                onClick={valid} 
              >
                <Typography>{lang==='eng'?'Next step':'下一步'}</Typography>
              </Fab>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanel3