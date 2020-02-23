import React, { useState, useEffect } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  MenuItem,
  Fab
} from '@material-ui/core'

import {
  getRegisterType,
  getbrandList,
  getManufactureYearList,
  getBodyTypeList
} from '../../../api/api/car/car'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel1 = props => {
  const [registerTypeList, setRegisterTypeList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [manufactureYearList, setManufactureYearList] = useState([])
  const [bodyTypeList, setBodyTypeList] = useState([])

  useEffect(() => {
    const x = async () => {
      const result = await Promise.all([
        getRegisterType(),
        getbrandList(),
        getManufactureYearList(),
        getBodyTypeList()
      ])
      setRegisterTypeList(result[0].carRegisterTypeList)
      setBrandList(result[1].brandList)
      setManufactureYearList(result[2].yearList)
      setBodyTypeList(result[3].bodyTypeList)
    }
    x()
  }, [])
  return (
    <ExpansionPanel expanded={props.open === 0}>
      <ExpansionPanelSummary>
        <Typography>車輛資料</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <TextField
            fullWidth
            select
            value={props.state.regisType}
            onChange={(e) => props.setState(state => ({
              ...state, regisType: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label="登記類別"
          >
            {registerTypeList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            value={props.state.depotName}
            onChange={(e) => props.setState(state => ({
              ...state, depotName: e.target.value
            }))}
            label="車廠名稱"
            select
            fullWidth
            InputLabelProps={InputLabelProps}
          >
            {brandList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            value={props.state.manufactureYear}
            onChange={(e) => props.setState(state => ({
              ...state, manufactureYear: e.target.value
            }))}
            select
            InputLabelProps={InputLabelProps}
            label="出廠年份"
          >
            {manufactureYearList.map((item, i) => (
              <MenuItem key={`option${i}${item.year}`} value={item.id}>
                {item.year}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            value={props.state.model}
            onChange={(e) => props.setState(state => ({
              ...state, model: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label="型號"
          />
          <TextField
            fullWidth
            value={props.state.engineCapacity}
            InputLabelProps={InputLabelProps}
            label="引擎容量(c.c)"
          />
          <TextField
            fullWidth
            select
            value={props.state.carBodyType}
            onChange={(e) => props.setState(state => ({
              ...state, carBodyType: e.target.value
            }))}
            InputLabelProps={InputLabelProps}
            label="車身類型"
          >
            {bodyTypeList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <Fab variant="extended" onClick={props.next} style={{ margin: '8px' }}>
            <Typography>下一步</Typography>
          </Fab>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}


export default ExpansionPanel1