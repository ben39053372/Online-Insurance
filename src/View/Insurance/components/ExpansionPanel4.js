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
import { useSelector } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";

const InputLabelProps = {
  shrink: true,
  classes: {}
}

var re = /\S+@\S+\.\S+/;

const ExpansionPanel4 = props => {
  const classes = useStyles()
  const lang = useSelector(state => state.lang)
  const [commited, setCommited] = useState(false)
  const [ErrorOpen, setErrorOpen] = useState(false)
  const [errorState, seterrorState] = useState(false)
  const [agree, setAgree] = useState(true)
  const [recaptcha, setrecaptcha] = useState('')

  const valid = () => {
    setCommited(true)
    if (props.state.email === '' || !re.test(props.state.email)) {
      // seterrorState('請輸入正確電郵')
      lang === 'eng' ? seterrorState('Please Input all info') : seterrorState('請輸入正確電郵')
      setErrorOpen(true)
    } else if (props.state.mobile === '' || props.state.mobile.length < 8 || props.state.mobile.length > 20) {
      // seterrorState('請輸入正確電話號碼')
      lang === 'eng' ? seterrorState('Please Input all info') : seterrorState('請輸入正確電話號碼')
      setErrorOpen(true)
    } else if (agree === false) {
      // seterrorState('請勾選我已閱讀條項與細則')
      lang === 'eng' ? seterrorState('Please Input all info') : seterrorState('請勾選我已閱讀條項與細則')
      setErrorOpen(true)
    } else {
      seterrorState('')
      setErrorOpen(false)
      props.finish()
    }
  }
  const onRecaptchaChange = (value) => {
    console.log(value)
    setrecaptcha(value)
  }
  return (
    <ExpansionPanel expanded={props.open === 4}>
      <ExpansionPanelSummary>
        <Typography>{lang === 'eng' ? 'Last step' : '完成報價'}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.ExpansionPanelDetails}>
          <Typography>{lang === 'eng' ? 'One more step to go!' : '只差一步!'}</Typography>
          <Typography>{lang === 'eng' ? 'Please provide your contact for sending you the quotations!' : '請提供您的聯絡資料方便我們即時提供報價消息!'}</Typography>
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
            label={lang === 'eng' ? 'Email' : '您的電郵'}
          />
          <TextField
            error={commited && (props.state.mobile === '' || (props.state.mobile.length > 8 && props.state.mobile.length <= 20))}
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
            label={lang === 'eng' ? 'Phone number' : '您的手提號碼'}
          />
          <Checkbox
            defaultChecked
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            value="secondary"
            color="primary"
          />
          <Typography variant='inherit'>{lang === 'eng' ? 'I have read the terms and conditions' : '我已閱讀條項與細則'}</Typography>
          <br />
          {/* client 6Ld0IecUAAAAAFuJm2gJhYDeiWe7ZQrw9M-amgc1 */}
          {/* server 6Ld0IecUAAAAADgyIX9aGUol070iy_A8YUB1egpi */}
          {/* <ReCAPTCHA
            sitekey="6Ld0IecUAAAAAFuJm2gJhYDeiWe7ZQrw9M-amgc1"
            onChange={onRecaptchaChange}
          /> */}
          <br />

          <Collapse in={ErrorOpen}>
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              {errorState.toString()}
            </Alert>
          </Collapse>
          <Grid container>
            <Grid item xs={6}>
              <Fab className={classes.PrevButton} variant="extended" onClick={props.prev}>
                <Typography>{lang === 'eng' ? 'Previous step' : '上一步'}</Typography>
              </Fab>
            </Grid>
            <Grid item xs={6}>
              <Fab
                // disabled={recaptcha === ''}
                className={classes.NextButton}
                variant="extended"
                // onClick={props.finish}
                onClick={valid}
              >
                <Typography>{lang === 'eng' ? 'Submit' : '完成'}</Typography>
              </Fab>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanel4