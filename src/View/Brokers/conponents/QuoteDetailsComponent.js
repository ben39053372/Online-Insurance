import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, TextField, MenuItem } from '@material-ui/core'
import { putQuotationRequest } from '../../../api/api/broker'
import { useParams, useHistory } from 'react-router-dom'
import { getCompanyList, getPlanList } from '../../../api/api/broker'
import useStyles from '../../../style/style'

const setting = [
  ['保險公司'],
  ['投保「全保」', '(包括第三者責任保險)'],
  ['特惠一年保養'],
  ['General Excess', '自身車輛財物損毀'],
  ['Theft Loss Excess', '全車被盗'],
  ['Parking', '自身車輛財物損毀', '於停泊時'],
  ['TPPD', '第三者財物損失-投保人'],
  ['TPPD-Y', '財物損失-低於25歲之司機'],
  ['TPPD-I', '財物損失-少於2年駕駛經驗'],
  ['TPPD-U', '財物損失-不記名司機']
]

export default props => {
  const classes = useStyles()
  let { id } = useParams()
  const history = useHistory()
  const [inputData, setInputData] = useState({
    planCompanyId: '1',
    insurancePlanTypeId: '1',
    oneYearInsuranceFee: '',
    generalExcess: '',
    theftLossExcess: '',
    parking: '',
    TPPD: '',
    TPPDY: '',
    TPPDI: '',
    TPPDU: ''
  })
  const [companyList, setCompanyList] = useState([])
  const [planTypeList, setPlanTypeList] = useState([])
  useEffect(() => {
    getCompanyList().then(res => {
      if(res.status === 200){
        setCompanyList(res.data.companyList)
      } else {
        console.log(res.data.error)
      }
    })
    getPlanList().then(res => {
      if(res.status === 200){
        setPlanTypeList(res.data.planTypeList)
      } else {
        console.log(res.data.error)
      }
    })
  }, [])
  const onInputChange = (e, name) => {
    let data = { ...inputData }
    data[name] = e.target.value
    setInputData({
      ...data
    })
  }
  const onSubmit = () => {
    putQuotationRequest(id, inputData).then(res => {
      console.log(res)
      if (res.status === 200) {
        history.push('/Brokers/RequestList')
      }
    })
  }
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={6} container direction="column">
          {setting.map((array, i) => (
            <Grid container item key={i} alignItems="center">
              {(array).map((arr, j) => (
                <Typography key={arr} display="block">{arr}</Typography>
              ))}
            </Grid>
          ))}
          <Grid item xs={6} container direction="column">
            {Object.keys(inputData).map((item, i) => (
              <Grid container item key={i} alignItems="center">
                {item === "planCompanyId" ? (
                  <TextField
                    fullWidth
                    select
                    value={inputData[item]}
                    onChange={e => onInputChange(e, item)}
                    type="number"
                  >
                    {companyList.map( item => (
                      <MenuItem key={item.nameEn} value={item.id}>
                        {item.nameEn || item.nameCht}
                      </MenuItem>
                    ))}
                  </TextField>
                ): item === "insurancePlanTypeId"? (
                  <TextField
                    fullWidth
                    select
                    value={inputData[item]}
                    onChange={e => onInputChange(e, item)}
                    type="number"
                  >
                    {planTypeList.map( item=> (
                      <MenuItem key={item.nameEn} value={item.id}>
                        {item.nameEn || item.nameCht}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : (
                  <TextField
                  fullWidth
                  value={inputData[item]}
                  onChange={e => onInputChange(e, item)}
                  type="number"
                />
                )}
                
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Typography display="inline">車主資料</Typography>
          {props.data.isUserInterested === 0 ? (
            <Typography>未授權顯示</Typography>
          ) : (
              <Typography>{props.data.customerPhoneNumber || 'None'}</Typography>
            )}
      </div>
      <div>
      <Typography display="inline">你的報價將會即時電郵給車主</Typography>
        <Button variant="contained" onClick={onSubmit} color="primary">
          提交報價
          </Button>
        
      </div>
    </div>
  )
}