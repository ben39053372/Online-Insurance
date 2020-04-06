import React, { useState, useEffect } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  MenuItem,
  Fab,
  Grid,
  Collapse
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import {
  getRoleList,
  getNoClaimDiscountList
} from '../../../api/api/driver'
import useStyles from '../../../style/style'
import { useSelector } from 'react-redux'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

export default props => {
  const lang = useSelector(state=>state.lang)
  const [commited, setCommited] = useState(false)
  const valid = () => {
    setCommited(true)
    if (props.state.insuredIdentity === '') {
      seterrorState('請選擇投保身份')
      setErrorOpen(true)
    } else if (props.state.discount === '') {
      seterrorState('請選擇無索償折扣(NCD)')
      setErrorOpen(true)
    } else if (props.state.numberOfExistingVehicles === '') {
      seterrorState('請輸入現有車輛數目')
      setErrorOpen(true)
    } else {
      seterrorState('')
      setErrorOpen(false)
      props.next()
    }
  }
  const [ErrorOpen, setErrorOpen] = useState(false)
  const [errorState, seterrorState] = useState(false)
  const classes = useStyles()
  const [roleList, setRoleList] = useState([])
  const [noClaimDiscountList, setNoClaimDiscountList] = useState([])
  useEffect(() => {
    const x = async () => {
      const result = await Promise.all([
        getRoleList(),
        getNoClaimDiscountList()
      ])
      setRoleList(result[0].data.driverRoleList)
      setNoClaimDiscountList(result[1].data.driverNoClaimDiscountList)
    }
    x()
    // eslint-disable-next-line
  }, [])
  return (
    <ExpansionPanel expanded={props.open === 1}>
      <ExpansionPanelSummary>
        <Typography>{lang==='eng'?'':'投保者資料'}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.ExpansionPanelDetails}>
          <TextField
            error={commited && props.state.insuredIdentity === ''}
            fullWidth
            select
            value={props.state.insuredIdentity}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, insuredIdentity: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'?'':'投保身份'}
          >
            {roleList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {lang==='eng'?item.nameEn: item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            error={commited && props.state.discount === ''}
            select
            value={props.state.discount}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, discount: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'?'':'無索償折扣(NCD)'}
          >
            {noClaimDiscountList.map((item, i) => (
              <MenuItem key={`option${i}${item.discount}`} value={item.id}>
                {item.discount}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            error={commited && props.state.numberOfExistingVehicles === ''}
            type="number"
            value={props.state.numberOfExistingVehicles}
            onChange={(e) => {
              let value = e.target.value
              if (value > 9999) value = 9999
              if (value >= 0) {
                props.setState(state => ({
                  ...state, numberOfExistingVehicles: value
                }))
              }
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'?'':'現有車輛數目'}
          />
          <Collapse in={ErrorOpen}>
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              {errorState.toString()}
            </Alert>
          </Collapse>
          <Grid container>
            <Grid item xs={6}>
              <Fab className={classes.PrevButton} variant="extended" onClick={props.prev}>
                <Typography>{lang==='eng'?'':'上一步'}</Typography>
              </Fab>
            </Grid>
            <Grid item xs={6}>
              <Fab
                className={classes.NextButton}
                variant="extended"
                onClick={valid}
              // onClick={props.next}
              >
                <Typography>{lang==='eng'?'':'下一步'}</Typography>
              </Fab>
            </Grid>
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}