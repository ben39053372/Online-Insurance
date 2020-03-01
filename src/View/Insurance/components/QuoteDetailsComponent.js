import React, { useState, useRef } from 'react';
import { Button, Typography, Grid } from '@material-ui/core'
import { putInterested, postClosing } from '../../../api/api/quotation'
import { useHistory } from 'react-router-dom'
import useStyles from '../../../style/style'

export default props => {
  const classes = useStyles()
  const history = useHistory()
  const setting = [
    { '保險公司': props.item.insuranceCompanyNameEn || props.item.insuranceCompanyNameCht },
    { '投保「全保」 (包括第三者責任保險)': props.item.insurancePlanTypeEn || props.item.insurancePlanTypeCht },
    { '特惠一年保養': props.item.oneYearInsuranceFee },
    { 'General Excess 自身車輛財物損毀': props.item.generalExcess },
    { 'Theft Loss Excess 全車被盗': props.item.theftLossExcess },
    { 'Parking 自身車輛財物損毀 於停泊時': props.item.parking },
    { 'TPPD 第三者財物損失-投保人': props.item.TPPD },
    { 'TPPD-Y 財物損失-低於25歲之司機': props.item.TPPDY },
    { 'TPPD-I 財物損失-少於2年駕駛經驗': props.item.TPPDI },
    { 'TPPD-U 財物損失-不記名司機': props.item.TPPDU }
  ]
  const interested = () => {
    putInterested(props.item.quotationId).then(res => {
      console.log(res)
    })
    setInterestedState(true)
  }
  const uploadInvoice = () => {
    console.log('upload')
    fileUploader.current.click()
  }
  const [interestedState, setInterestedState] = useState(props.item.isUserInterested)
  const [uploadButtonDisable, setUploadButtonDisable] = useState(false)
  const fileUploader = useRef(null);
  const onFileChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    if (file !== undefined) {
      console.log(file)
      postClosing(props.item.quotationId, file).then(res => {
        console.log(res)
        if (res.status === 200 || res.error === 'Closing record exists already.') {
          setUploadButtonDisable(true)
          localStorage.removeItem('jwt1')
          history.push('/Customers/home')
        }
      })
    }
  }
  return (
    <>
      <Grid container >
        {setting.map((item, i) => (
          <React.Fragment key={item + i}>
            <Grid item xs={6}>
              {Object.keys(item)[0].split(' ').map(string => (
                <Typography key={string}>{string}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography>{Object.values(item)[0]}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      {!interestedState ? (
        <div>
          <Button variant="contained" onClick={interested} color="primary" >
            請顯示
        </Button>
          <Typography>step 1</Typography>
          <Typography>我有興趣，請顯示雙方聯絡
        </Typography>
        </div>
      ):(
        <div>
          <Typography>對方聯絡:</Typography>
          <Typography>{props.item.brokerPhoneNumber}</Typography>
        </div>
      )}
      <div>
        <Button variant="contained" disabled={uploadButtonDisable} onClick={uploadInvoice} color="primary">
          換領禮品
        </Button>
        <input type="file" id="file" ref={fileUploader} onChange={onFileChange} />
        <Typography>step 2</Typography>
        <Typography>請上載保單主頁以換領禮品</Typography>
      </div>
    </>
  )
}