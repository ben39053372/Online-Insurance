import React, { useState } from 'react'
import Exp1 from './components/ExpansionPanel1'
import Exp2 from './components/ExpansionPanel2'
import Exp3 from './components/ExpansionPanel3'
import Exp4 from './components/ExpansionPanel4'
import Exp5 from './components/ExpansionPanel5'
import { postQuotationRequest } from '../../api/api/quotation'

import { Snackbar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Fab } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

const ownerStateTemp = {
  dateOfBirth: {
    year: "2000",
    month: "1",
    date: "1"
  },
  industry: '',
  drivingExperience: '',
  position: '',
  isMainDriver: false
}
const InputForm = props => {
  const history = useHistory();
  const [open, setOpen] = useState(0)
  const next = () => {
    setOpen(open + 1)
  }
  const prev = () => {
    setOpen(open - 1)
  }
  const addDrivers = async() => {
    console.log('before:',ownerState)
    await setDrivers(drivers + 1)
    await setOwnerState([...ownerState].concat({...ownerStateTemp}))
    await setOpen(ownerState.length + 2)
    await console.log('after:',ownerState)
  }
  const removeDrivers = index => {
    console.log(index)
    setDrivers(drivers - 1)
    setOpen(open - 1)
    ownerState.splice(index+1, 1)
    setOwnerState(ownerState)
  }
  const finish = () => {
    // eslint-disable-next-line
    let data = {
      // 電郵
      email: userState.email,
      // 手機
      phoneNumber: userState.mobile,
      // 登記類別
      registerTypeId: carState.regisType,
      // 車廠
      brandId: carState.depotName,
      // 出廠年份
      manufactureYearId: carState.manufactureYear,
      // 型號
      model: carState.model,
      // 引擎容量
      cylinderCapacity: carState.engineCapacity,
      // 車身類型
      bodyTypeId: carState.carBodyType,
      // 車數量
      ownCarsCount: ownerState_head.numberOfExistingVehicles,
      // 車牌號碼
      licenseNumber: carState.licensePlate,
      drivers: ownerState.map(item => ({
        birthday: `${item.dateOfBirth.year}-${item.dateOfBirth.month}-${item.dateOfBirth.date}`,
        jobIndustryId: item.industry,
        ocupationId: item.position,
        drivingExpYear: item.drivingExperience,
        isMainDriver: item.isMainDriver ? 1 : 0,
      })),
      // 保險類別
      insuranceTypeId: insuredState.insureType,
      // 全保投保額
      insuredAmount: insuredState.insuredAmount,
      // 投保身份
      roleId: ownerState_head.insuredIdentity,
      noClaimDiscountId: ownerState_head.discount,
      isNewApply: 1
    }
    console.log(data)
    postQuotationRequest(data).then(res => {
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem('jwt1', res.data.jwt)
        history.push("/Customers/CarInfo");
      } else {
        console.log('error')
        setErrorState(res.data.error)
        setErrorOpen(true)
      }
    })
      .catch(err => {
        setErrorState(err)
        setErrorOpen(true)
      })
  }
  const [errorState, setErrorState] = useState('')
  const [carState, setCarState] = useState({
    regisType: '',
    depotName: '',
    manufactureYear: '',
    model: '',
    engineCapacity: '',
    carBodyType: '',
    licensePlate: ''
  })
  const [ownerState_head, setOwnerState_head] = useState({
    insuredIdentity: "",
    discount: '',
    numberOfExistingVehicles: ''
  })
  const [ownerState, setOwnerState] = useState([{
    dateOfBirth: {
      year: "2000",
      month: "1",
      date: "1"
    },
    industry: '',
    drivingExperience: '',
    position: '',
    isMainDriver: true
  }])
  const [insuredState, setInsuredState] = useState({
    insureType: 1,
    insuredAmount: '',
  })
  const [userState, setUserState] = useState({
    email: '',
    mobile: ''
  })
  const [drivers, setDrivers] = useState(0)
  const [ErrorOpen, setErrorOpen] = useState(false)
  const handleClose = () => {
    setErrorOpen(false)
  }
  return (
    <>
      <Snackbar open={ErrorOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorState.toString()}
        </Alert>
      </Snackbar>
      <Exp1 open={open} next={next} state={carState} setState={setCarState} />
      <Exp5 open={open} prev={prev} next={next} state={ownerState_head} setState={setOwnerState_head} />
      <ExpansionPanel expanded={open === 2 + drivers}>
        <ExpansionPanelSummary>
          <Typography>駕駛者資料</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container direction="row">
            {ownerState.map((item, i) => (
              <Exp2
                key={i}
                index={i}
                open={open}
                prev={prev}
                next={next}
                state={ownerState}
                setState={setOwnerState}
                offset={drivers}
                add={addDrivers}
                remove={(i) => removeDrivers}
              />
            ))}
            <Fab variant="extended" onClick={prev} style={{ margin: '8px' }}>
              <Typography>上一步</Typography>
            </Fab>
            <Fab variant="extended" onClick={addDrivers} style={{ margin: '8px' }}>
            <Typography>新增車主</Typography>
          </Fab>
            <Fab variant="extended" onClick={next} style={{ margin: '8px' }}>
              <Typography>下一步</Typography>
            </Fab>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Exp3 open={open} offset={drivers} prev={prev} next={next} state={insuredState} setState={setInsuredState} />
      <Exp4 open={open} offset={drivers} prev={prev} state={userState} setState={setUserState} finish={finish} />
    </>
  )
}

export default InputForm