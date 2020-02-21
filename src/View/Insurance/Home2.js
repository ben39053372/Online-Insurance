import React, { useState, useEffect } from 'react'

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  MenuItem
} from '@material-ui/core'

import {
  getRegisterType,
  getbrandList,
  getManufactureYearList,
  getBodyTypeList
} from '../../api/api/car/car'

import {
  getRoleList,
  getJobIndustryList,
  getOcupationList,
  getNoClaimDiscountList
} from '../../api/api/driver/driver'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const InputForm = () => {
  const [registerTypeList, setRegisterTypeList] = useState([])
  const [brandList, setBrandList] = useState([])
  const [manufactureYearList, setManufactureYearList] = useState([])
  const [bodyTypeList, setBodyTypeList] = useState([])
  const [carState, setCarState] = useState({
    regisType: '',
    depotName: '',
    manufactureYear: '',
    model: '',
    engineCapacity: '',
    carBodyType: ''
  })
  const [ownerState, setOwnerState] = useState({
    insuredIdentity: '',
    dateOfBirth: {
      year: "2000年",
      month: "1月",
      date: "1日"
    },
    industry: '',
    discount: '',
    drivingExperience: '',
    position: '',
    numberOfExistingVehicles: ''
  })
  const [insureTypeState, setInsureTypeState] = useState({
    onlineInsure: '',
    insureType: '',
    insureSum: ''
  })
  const [completeState, setCompleteState] = useState({
    email: '',
    mobile: ''
  })
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
    <>
      {/* panel 1 */}
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>車輛資料</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <TextField
              fullWidth
              select
              value={carState.regisType}
              onChange={(e) => setCarState(state => ({
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
              value={carState.depotName}
              onChange={(e) => setCarState(state => ({
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
              value={carState.manufactureYear}
              onChange={(e) => setCarState(state => ({
                ...state, manufactureYear: e.target.value 
              }))}
              InputLabelProps={InputLabelProps}
              label="出廠年份"
            >
              {manufactureYearList.map((item, i) => (
                <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                  {item.nameCht}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              value={carState.model}
              onChange={(e) => setCarState(state => ({
                ...state, model: e.target.value 
              }))}
              InputLabelProps={InputLabelProps}
              label="型號"
            />
            <TextField
              fullWidth
              value={carState.engineCapacity}
              InputLabelProps={InputLabelProps}
              label="引擎容量(c.c)"
            />
            <TextField
              fullWidth
              value={carState.carBodyType}
              InputLabelProps={InputLabelProps}
              label="車身類型"
            >
              {bodyTypeList.map((item, i) => (
                <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                  {item.nameCht}
                </MenuItem>
              ))}
            </TextField>
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>下一步</Typography>
            </Fab>
          </div>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* panel 2 */}
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>車主資料</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <TextField
              fullWidth
              value={ownerState.insuredIdentity}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                insuredIdentity: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="投保身份"
            />
            <TextField
              fullWidth
              value={ownerState.dateOfBirth}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                dateOfBirth: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="出生日期"
            />
            <TextField
              fullWidth
              value={ownerState.industry}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                industry: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="所屬行業"
            />
            <TextField
              fullWidth
              value={ownerState.discount}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                discount: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="無索償折扣(NCD)"
            />
            <TextField
              fullWidth
              value={ownerState.drivingExperience}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                drivingExperience: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="駕駛經驗(年)"
            />
            <TextField
              fullWidth
              value={ownerState.position}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                position: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="職位"
            />
            <TextField
              fullWidth
              value={ownerState.numberOfExistingVehicles}
              onChange={(e) => setOwnerState(state => ({
                ...state,
                numberOfExistingVehicles: e.target.value
              }))}
              InputLabelProps={InputLabelProps}
              label="現有車輛數目"
            />
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>上一步</Typography>
            </Fab>
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>新增車主</Typography>
            </Fab>
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>下一步</Typography>
            </Fab>
          </div>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* panel 3 */}
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>投保類別</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <TextField
              fullWidth
              value={insureTypeState.onlineInsure}
              onChange={}
              InputLabelProps={InputLabelProps}
              label="網上購買汽車保險"
            />
            <TextField
              fullWidth
              value={insureTypeState.insureType}
              InputLabelProps={InputLabelProps}
              label="請選擇保險類別"
            />
            <TextField
              fullWidth
              value={insureTypeState.insureSum}
              InputLabelProps={InputLabelProps}
              label="全保投保額(HK$) #"
            />
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>上一步</Typography>
            </Fab>
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>下一步</Typography>
            </Fab>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      {/* panel 4 */}
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>完成報價</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>只差一步!請提供您的聯絡資料方便我們即時提供報價消息!</Typography>
            <TextField
              fullWidth
              label="您的電郵"
            />
            <TextField
              fullWidth
              label="您的手提號碼"
            />
            <Fab variant="extended" style={{ margin: '8px' }}>
              <Typography>完成</Typography>
            </Fab>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default InputForm