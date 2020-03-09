import React, { useState } from 'react'
import Exp1 from './components/ExpansionPanel1'
import Exp2 from './components/ExpansionPanel2'
import Exp3 from './components/ExpansionPanel3'
import Exp4 from './components/ExpansionPanel4'
import Exp5 from './components/ExpansionPanel5'
import { postQuotationRequest } from '../../api/api/quotation'

import { Snackbar, ExpansionPanel, Collapse, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Fab } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import useStyles from '../../style/style'

const ownerStateTemp = {
  dateOfBirth: {
    year: "",
    month: "",
    date: ""
  },
  industry: '',
  drivingExperience: '',
  position: '',
  isMainDriver: false
}
const InputForm = props => {
  const classes = useStyles()
  const history = useHistory();
  const [open, setOpen] = useState(0)
  const next = () => {
    setOpen(open + 1)
  }
  const prev = () => {
    setOpen(open - 1)
  }
  const addDrivers = () => {
    setDrivers(drivers + 1)
    setCommited(false)
    let temp = [...ownerState]
    ownerStateTemp.dateOfBirth.year = ''
    setOwnerState([...temp, Object.assign({}, ownerStateTemp)])
    console.log(ownerState)
  }
  const removeDrivers = index => {
    console.log(index)
    setDrivers(drivers - 1)
    ownerState.splice(index, 1)
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
      year: "",
      month: "",
      date: ""
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
  const [commited, setCommited] = useState(false)
  const [ErrorOpen2, setErrorOpen2] = useState(false)
  const [errorState2, seterrorState2] = useState('')
  const valid = async () => {
    setCommited(true)
    await seterrorState2('')
    await setErrorOpen2(false)
    for (let i = 0; i < ownerState.length; i++) {
      console.log('i:', i)
      console.log('ownerState.length:', ownerState.length)
      console.log('ErrorOpen2:', ErrorOpen2)
      console.log('errorState2:', errorState2)
      console.log('1')
      if (ownerState[i].dateOfBirth.year === '' || ownerState[i].dateOfBirth.month === '' || ownerState[i].dateOfBirth.date === '') {
        await seterrorState2('請輸入生日日期')
        await setErrorOpen2(true)
        console.log('2')
        break
      } else if (ownerState[i].industry === '') {
        await seterrorState2('請選擇所屬行業')
        await setErrorOpen2(true)
        console.log('3')
        break
      } else if (ownerState[i].drivingExperience === '') {
        await seterrorState2('請選擇駕駛經驗')
        await setErrorOpen2(true)
        console.log('4')
        break
      } else if (ownerState[i].position === '') {
        await seterrorState2('請輸入職位')
        await setErrorOpen2(true)
        console.log('5')
        break
      } else if (ErrorOpen2 === false && i === (ownerState.length - 1)) {
        console.log('6')
        await seterrorState2('')
        await setErrorOpen2(false)
        next()
        break
      }
    }
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
      <ExpansionPanel expanded={open === 2}>
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
                commited={commited}
                setErrorOpen={setErrorOpen2}
                setErrorState={seterrorState2}
                state={ownerState}
                setState={setOwnerState}
                offset={drivers}
                add={addDrivers}
                remove={() => removeDrivers}
              />
            ))}

            <Fab className={classes.DriverButton} variant="extended" onClick={addDrivers}>
              <Typography>新增車主</Typography>
            </Fab>
            <Collapse in={ErrorOpen2} style={{ width: '100%' }}>
              <Alert onClose={() => setErrorOpen2(false)} severity="error">
                {errorState2.toString()}
              </Alert>
            </Collapse>
            <Grid container>
              <Grid item xs={6}>
                <Fab className={classes.PrevButton} variant="extended" onClick={prev}>
                  <Typography>上一步</Typography>
                </Fab>
              </Grid>
              <Grid item xs={6}>
                <Fab className={classes.NextButton} variant="extended" onClick={valid}>
                  <Typography>下一步</Typography>
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Exp3 open={open} offset={drivers} prev={prev} next={next} state={insuredState} setState={setInsuredState} />
      <Exp4 open={open} offset={drivers} prev={prev} state={userState} setState={setUserState} finish={finish} />
    </>
  )
}

export default InputForm