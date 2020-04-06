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
  Collapse,
} from '@material-ui/core'

import {
  getRegisterType,
  getbrandList,
  getManufactureYearList,
  getBodyTypeList
} from '../../../api/api/car'

import useStyles from '../../../style/style'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel1 = props => {
  const classes = useStyles()
  const [registerTypeList, setRegisterTypeList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [manufactureYearList, setManufactureYearList] = useState([])
  const [bodyTypeList, setBodyTypeList] = useState([])
  const [commited, setCommited] = useState(false)
  const lang = useSelector(state => state.lang)
  
  const valid = () => {
    setCommited(true)
    if (props.state.regisType === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請選擇登記類別')
      setErrorOpen(true)
    } else if (props.state.depotName === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請選擇車廠名稱')
      setErrorOpen(true)
    } else if (props.state.manufactureYear === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請選擇出廠年份')
      setErrorOpen(true)
    } else if (props.state.model === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請輸入型號')
      setErrorOpen(true)
    } else if (props.state.engineCapacity === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請輸入引擎容量')
      setErrorOpen(true)
    } else if (props.state.licensePlate === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請輸入車牌號碼')
      setErrorOpen(true)
    } else if (props.state.carBodyType === '') {
      lang==='eng'?seterrorState('Please Input'):seterrorState('請選擇車身類型')
      setErrorOpen(true)
    } else {
      seterrorState('')
      setErrorOpen(false)
      props.next()
    }
  }

  useEffect(() => {
    const x = async () => {
      const result = await Promise.all([
        getRegisterType(),
        getbrandList(),
        getManufactureYearList(),
        getBodyTypeList()
      ])
      setRegisterTypeList(result[0].data.carRegisterTypeList)
      setBrandList(result[1].data.brandList)
      setManufactureYearList(result[2].data.yearList)
      setBodyTypeList(result[3].data.bodyTypeList)
    }
    x()
  }, [])
  const [ErrorOpen, setErrorOpen] = useState(false)
  const [errorState, seterrorState] = useState(false)
  return (
    <ExpansionPanel className={classes.ExpansionPanel} expanded={props.open === 0}>
      <ExpansionPanelSummary>
        <DirectionsCarIcon />
        <Typography>{lang==='eng'? 'Car Information' : '車輛資料'}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails >

        <div className={classes.ExpansionPanelDetails}>
          <TextField
            error={commited && props.state.regisType === ''}
            fullWidth
            select
            value={props.state.regisType}
            onChange={(e) => props.setState(state => ({
              ...state, regisType: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'? '' : '登記類別'}
          >
            {registerTypeList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {lang==='eng'?item.nameEn: item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={commited && props.state.depotName === ''}
            value={props.state.depotName}
            onChange={(e) => props.setState(state => ({
              ...state, depotName: e.target.value
            }))}
            label={lang==='eng'? '' : "車廠名稱"}
            select
            fullWidth
            InputLabelProps={InputLabelProps}
          >
            {brandList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {lang==='eng'?item.nameEn: item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            error={commited && props.state.manufactureYear === ''}
            fullWidth
            value={props.state.manufactureYear}
            onChange={(e) => props.setState(state => ({
              ...state, manufactureYear: e.target.value
            }))}
            select
            InputLabelProps={InputLabelProps}
            label={lang==='eng'? '' : "出廠年份"}
          >
            {manufactureYearList.map((item, i) => (
              <MenuItem key={`option${i}${item.year}`} value={item.id}>
                {item.year}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            error={commited && props.state.model === ''}
            value={props.state.model}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, model: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'? '' : "型號"}
          />
          <TextField
            fullWidth
            error={commited && props.state.engineCapacity === ''}
            value={props.state.engineCapacity}
            type="number"
            onChange={(e) => {
              let value = e.target.value
              console.log(value)
              if (value > 10000) {
                value = 9999
              }
              props.setState(state => ({
                ...state, engineCapacity: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'? '' : "引擎容量(c.c)"}
          />
          <TextField
            fullWidth
            error={commited && props.state.licensePlate === ''}
            value={props.state.licensePlate}
            onChange={(e) => {
              let value = e.target.value
              props.setState(state => ({
                ...state, licensePlate: value
              }))
            }}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'? '' : "車牌號碼"}
          />
          <TextField
            fullWidth
            select
            error={commited && props.state.carBodyType === ''}
            value={props.state.carBodyType}
            onChange={(e) => props.setState(state => ({
              ...state, carBodyType: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label={lang==='eng'? '' : "車身類型"}
          >
            {bodyTypeList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {lang==='eng'?item.nameEn: item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <Collapse in={ErrorOpen}>
            <Alert onClose={() => setErrorOpen(false)} severity="error">
              {errorState.toString()}
            </Alert>
          </Collapse>
          <Grid container item xs={12} justify="center" alignContent="center">
            <Fab
              className={classes.NextButton}
              variant="extended"
              onClick={valid} 
              // onClick={props.next}
              alignItems="center"
            >
              <Typography>{lang === 'eng'? 'NEXT' : '下一步' }</Typography>
            </Fab>
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}


export default ExpansionPanel1