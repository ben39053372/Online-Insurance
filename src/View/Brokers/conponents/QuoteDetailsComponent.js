import React, { useState, useEffect } from 'react'
import { Typography, Button, TextField, List, ListSubheader, ListItem, ListItemText, Divider, MenuItem } from '@material-ui/core'
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
    planCompanyId: '',
    insurancePlanTypeId: '',
    oneYearInsuranceFee: '',
    generalExcess: '',
    theftLossExcess: '',
    parking: '',
    TPPD: '',
    TPPDY: '',
    TPPDI: '',
    TPPDU: ''
  })
  const setting2 = [
    { title: '保險公司', content: props.data.insuranceCompanyNameEn || props.data.insuranceCompanyNameCht },
    { title: '投保「全保」 * (包括第三者責任保險)', content: props.data.insurancePlanTypeEn || props.data.insurancePlanTypeCht },
    { title: '特惠一年保養', content: props.data.oneYearInsuranceFee },
    { title: 'General Excess * 自身車輛財物損毀', content: props.data.generalExcess },
    { title: 'Theft Loss Excess * 全車被盗', content: props.data.theftLossExcess },
    { title: 'Parking * 自身車輛財物損毀 * 於停泊時', content: props.data.parking },
    { title: 'TPPD * 第三者財物損失 * 投保人', content: props.data.TPPD },
    { title: 'TPPD-Y * 財物損失 * 低於25歲之司機', content: props.data.TPPDY },
    { title: 'TPPD-I * 財物損失 * 少於2年駕駛經驗', content: props.data.TPPDI },
    { title: 'TPPD-U * 財物損失 * 不記名司機', content: props.data.TPPDU }
  ]
  const title = [
    { title: '保險公司', value: inputData.planCompanyId },
    { title: '投保「全保」 * (包括第三者責任保險)', value: inputData.insurancePlanTypeId },
    { title: '特惠一年保養', value: inputData.oneYearInsuranceFee },
    { title: 'General Excess * 自身車輛財物損毀', value: inputData.generalExcess },
    { title: 'Theft Loss Excess * 全車被盗', value: inputData.theftLossExcess },
    { title: 'Parking * 自身車輛財物損毀 * 於停泊時', value: inputData.parking },
    { title: 'TPPD * 第三者財物損失 * 投保人', value: inputData.TPPD },
    { title: 'TPPD-Y * 財物損失 * 低於25歲之司機', value: inputData.TPPDY },
    { title: 'TPPD-I * 財物損失 * 少於2年駕駛經驗', value: inputData.TPPDI },
    { title: 'TPPD-U * 財物損失 * 不記名司機', value: inputData.TPPDU }
  ]
  const [companyList, setCompanyList] = useState([])
  const [planTypeList, setPlanTypeList] = useState([])
  useEffect(() => {
    getCompanyList().then(res => {
      if (res.status === 200) {
        setCompanyList(res.data.companyList)
      } else {
        console.log(res.data.error)
      }
    })
    getPlanList().then(res => {
      if (res.status === 200) {
        setPlanTypeList(res.data.planTypeList)
      } else {
        console.log(res.data.error)
      }
    })

  }, [])
  useEffect(() => {
    setInputData({
      planCompanyId: props.data.insuranceCompanyNameCht,
      insurancePlanTypeId: props.data.insurancePlanTypeCht,
      oneYearInsuranceFee: props.data.oneYearInsuranceFee,
      generalExcess: props.data.generalExcess,
      theftLossExcess: props.data.theftLossExcess,
      parking: props.data.parking,
      TPPD: props.data.TPPD,
      TPPDY: props.data.TPPDY,
      TPPDI: props.data.TPPDI,
      TPPDU: props.data.TPPDU
    })
    console.log('companylist:', companyList)
  }, [props.data])
  const onInputChange = (e, name) => {
    console.log(name)
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
      <List dense >
        <ListSubheader disableSticky style={{ background: '#922' }}>報價詳情</ListSubheader>
        <ListItem>
          <ListItemText
            primary={'保險公司'.split(' * ').map(text => (
              <Typography
                className={classes.listPrimary}
                display="inline"
              >{text} <br />
              </Typography>
            ))}
            secondary={
              <TextField
                select
                className={classes.listInputSecondary}
                value={inputData.planCompanyId}
                onChange={(e) => onInputChange(e, 'planCompanyId')}
              >
                {companyList.map((item, index) => (
                  <MenuItem key={item + index} value={item.id}>
                    {item.nameCht}
                  </MenuItem>
                ))}
              </TextField>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'投保「全保」 * (包括第三者責任保險)'.split(' * ').map(text => (
              <Typography
                key={text}
                className={classes.listPrimary}
                display="inline"
              >
                {text}<br />
              </Typography>
            ))}
            secondary={
              <TextField
                select
                className={classes.listInputSecondary}
                value={inputData.insurancePlanTypeId}
                onChange={(e) => onInputChange(e, 'insurancePlanTypeId')}
              >
                {planTypeList.map((item, index) => (
                  <MenuItem key={item + index} value={item.id}>
                    {item.nameCht}
                  </MenuItem>
                ))}
              </TextField>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'特惠一年保養'.split(' * ').map(text => (
              <Typography
                key={text}
                className={classes.listPrimary}
                display="inline"
              >
                {text}<br />
              </Typography>
            ))}
            secondary={
              <TextField
                className={classes.listInputSecondary}
                value={inputData.oneYearInsuranceFee}
                onChange={(e) => onInputChange(e, 'oneYearInsuranceFee')}
              />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'General Excess * 自身車輛財物損毀'.split(' * ').map(text => (
              <Typography
                key={text}
                className={classes.listPrimary}
                display="inline"
              >
                {text}<br />
              </Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.generalExcess} onChange={(e) => onInputChange(e, 'generalExcess')} />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'Theft Loss Excess * 全車被盗'.split(' * ').map(text => (
              <Typography
                key={text}
                className={classes.listPrimary}
                display="inline"> {text}<br /></Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.theftLossExcess} onChange={(e) => onInputChange(e, 'theftLossExcess')} />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'Parking * 自身車輛財物損毀 * 於停泊時'.split(' * ').map(text => (
              <Typography key={text} className={classes.listPrimary} display="inline"> {text}<br /></Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.parking} onChange={(e) => onInputChange(e, 'parking')} />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'TPPD * 第三者財物損失 * 投保人'.split(' * ').map(text => (
              <Typography key={text} className={classes.listPrimary} display="inline"> {text}<br /></Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.TPPD} onChange={(e) => onInputChange(e, 'TPPD')} />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'TPPD-Y * 財物損失 * 低於25歲之司機'.split(' * ').map(text => (
              <Typography key={text} className={classes.listPrimary} display="inline"> {text}<br /></Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.TPPDY} onChange={(e) => onInputChange(e, 'TPPDY')} />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'TPPD-I * 財物損失 * 少於2年駕駛經驗'.split(' * ').map(text => (
              <Typography key={text} className={classes.listPrimary} display="inline"> {text}<br /></Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.TPPDI} onChange={(e) => onInputChange(e, 'TPPDI')} />
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary={'TPPD-U * 財物損失 * 不記名司機'.split(' * ').map(text => (
              <Typography key={text} className={classes.listPrimary} display="inline"> {text}<br /></Typography>
            ))}
            secondary={
              <TextField className={classes.listInputSecondary} value={inputData.TPPDU} onChange={(e) => onInputChange(e, 'TPPDU')} />
            }
          />
        </ListItem>
        <Divider />
      </List>



      <div>
        <Typography display="inline">車主資料</Typography>
        <div style={{ float: 'right' }}>
          {props.data.isUserInterested === 0 ? (
            <Typography>未授權顯示</Typography>
          ) : (
              <Typography>{props.data.customerPhoneNumber || 'None'}</Typography>
            )}
        </div>
      </div>
      <div>
        <Typography display="inline">你的報價將會即時電郵給車主</Typography>
        <div style={{float: 'right'}}>
          <Button variant="contained" onClick={onSubmit} color="primary">
            提交報價
          </Button>
        </div>
      </div>
    </div>
  )
}