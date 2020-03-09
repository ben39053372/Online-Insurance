import React, { useState } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  Checkbox,
  Grid,
  Collapse,
} from '@material-ui/core'
import useStyles from '../../../style/style'
import Alert from '@material-ui/lab/Alert';

const InputLabelProps = {
  shrink: true,
  classes: {}
}

var re = /\S+@\S+\.\S+/;

const ExpansionPanel4 = props => {
  const classes = useStyles()
  const [commited, setCommited] = useState(false)
  const [ErrorOpen, setErrorOpen] = useState(false)
  const [errorState, seterrorState] = useState(false)
  const valid = () => {
    setCommited(true)
    if (props.state.email === '' || !re.test(props.state.email)) {
      seterrorState('請輸入正確電郵')
      setErrorOpen(true)
    } else if (props.state.mobile === '' || props.state.mobile.length < 8 || props.state.mobile.length > 20) {
      seterrorState('請輸入正確電話號碼')
      setErrorOpen(true)
    } else {
      seterrorState('')
      setErrorOpen(false)
      props.finish()
    }
  }
  return (
    <ExpansionPanel expanded={props.open === 4}>
      <ExpansionPanelSummary>
        <Typography>完成報價</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <Typography>只差一步!</Typography>
          <Typography>請提供您的聯絡資料方便我們即時提供報價消息!</Typography>
          <TextField
            error={commited && (props.state.email === '' || !re.test(props.state.email))}
            vaule={props.state.email}
            type="email"
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
            error={commited && (props.state.mobile === '' || ( props.state.mobile.length > 8 && props.state.mobile.length <= 20) )}
            value={props.state.mobile}
            type="number"
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
          <br />
          <Collapse in={ErrorOpen}>
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              {errorState.toString()}
            </Alert>
          </Collapse>
          <Grid container>
            <Grid item xs={6}>
              <Fab className={classes.PrevButton} variant="extended" onClick={props.prev}>
                <Typography>上一步</Typography>
              </Fab>
            </Grid>
            <Grid item xs={6}>
              <Fab
                className={classes.NextButton}
                variant="extended"
                // onClick={props.finish}
                onClick={valid}
              >
                <Typography>完成</Typography>
              </Fab>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanel4