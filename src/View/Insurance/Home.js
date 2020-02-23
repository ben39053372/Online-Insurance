import React, { useState } from 'react'
import Exp1 from './components/ExpansionPanel1'
import Exp2 from './components/ExpansionPanel2'
import Exp3 from './components/ExpansionPanel3'
import Exp4 from './components/ExpansionPanel4'
import Exp5 from './components/ExpansionPanel5'

const ownerStateTemp = {
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
}
const InputForm = () => {
  const [open, setOpen] = useState(0)
  const next = () => {
    setOpen(open + 1)
  }
  const prev = () => {
    setOpen(open - 1)
  }
  const addDrivers = () => {
    setDrivers(drivers + 1)
    setOwnerState(ownerState.concat(ownerStateTemp))
    setOpen(ownerState.length + 2)
  }
  const removeDrivers = index => {
    setDrivers(drivers - 1)
    setOpen(ownerState.length)
    ownerState.splice(index, 1)
    setOwnerState(ownerState)
  }
  const finish = () => {
    let data = {
      email: userState.email,
      phoneNumber: userState.mobile,
      registerTypeId: carState.regisType,
      brandId: carState.depotName,
      manufactureYearId: carState.manufactureYear,
      model: carState.model,
      cylinderCapacity: carState.engineCapacity,
      bodyTypeId: carState.carBodyType,
      licenseNumber: carState.licensePlate,
      drivers: ownerState.map(item => ({
        birthday: `${item.dateOfBirth.year}-${item.dateOfBirth.month}-${item.dateOfBirth.date}`,
        jobIndustryId: item.insuredIdentity
      })),
      insuranceTypeId: insuredState.insureType,
      insuredAmount: insuredState.insuredAmount,
      roleId: 0
    }
  }
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
    insuredIdentity: 1,
    discount: '',
    numberOfExistingVehicles: ''
  })
  const [ownerState, setOwnerState] = useState([{
    dateOfBirth: {
      year: "2000年",
      month: "1月",
      date: "1日"
    },
    industry: '',
    drivingExperience: '',
    position: '',
  }])
  const [insuredState, setInsuredState] = useState({
    insureType: 0,
    insuredAmount: 0,
  })
  const [userState, setUserState] = useState({
    email: '',
    mobile: ''
  })
  const [drivers, setDrivers] = useState(0)
  return (
    <>
      <Exp1 open={open} next={next} state={carState} setState={setCarState} />
      <Exp5 open={open} prev={prev} next={next} state={ownerState_head} setState={setOwnerState_head} />
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
      <Exp3 open={open} offset={drivers} prev={prev} next={next} state={insuredState} setState={setInsuredState} />
      <Exp4 open={open} offset={drivers} prev={prev} state={userState} setState={setUserState} finish={finish} />
    </>
  )
}

export default InputForm