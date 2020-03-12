import React, { useState, useRef } from 'react';
import { Button, Typography, CircularProgress, List, ListSubheader, ListItem, ListItemText, Divider } from '@material-ui/core'
import { putInterested, postClosing } from '../../../api/api/quotation'
import { useHistory } from 'react-router-dom'
import useStyles from '../../../style/style'

export default props => {
  const classes = useStyles()
  const history = useHistory()
  const setting2 = [
    { title: '保險公司', content: props.item.insuranceCompanyNameEn || props.item.insuranceCompanyNameCht },
    { title: '投保「全保」 * (包括第三者責任保險)', content: props.item.insurancePlanTypeEn || props.item.insurancePlanTypeCht },
    { title: '特惠一年保養', content: props.item.oneYearInsuranceFee },
    { title: 'General Excess * 自身車輛財物損毀', content: props.item.generalExcess },
    { title: 'Theft Loss Excess * 全車被盗', content: props.item.theftLossExcess },
    { title: 'Parking * 自身車輛財物損毀 * 於停泊時', content: props.item.parking },
    { title: 'TPPD * 第三者財物損失 * 投保人', content: props.item.TPPD },
    { title: 'TPPD-Y * 財物損失 * 低於25歲之司機', content: props.item.TPPDY },
    { title: 'TPPD-I * 財物損失 * 少於2年駕駛經驗', content: props.item.TPPDI },
    { title: 'TPPD-U * 財物損失 * 不記名司機', content: props.item.TPPDU }
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
    setUploadButtonDisable(true)
    var file = event.target.files[0];
    if (file !== undefined) {
      console.log(file)
      postClosing(props.item.quotationId, file).then(res => {
        console.log(res)
        if (res.status === 200 || res.error === 'Closing record exists already.') {
          setUploadButtonDisable(false)
          localStorage.removeItem('jwt1')
          history.push('/Customers/home')
        }
      }).catch(err => {
        console.log(err)
        setUploadButtonDisable(false)
      })
    }
  }

  return (
    <div style={{ margin: '0 3px' }}>
      <List dense >
        <ListSubheader disableSticky style={{ background: '#922' }}>報價詳情</ListSubheader>
        {setting2.map((item, index) => (
          <React.Fragment key={'carList' + index}>
            <ListItem>
              <ListItemText
                primary={item.title.split(' * ').map(text => (
                  <Typography key={text} className={classes.listPrimary} display="inline">{text}<br /></Typography>
                ))}
                secondary={<Typography className={classes.listSecondary}>{item.content}</Typography>}
              />
            </ListItem>
            {index !== setting2.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      {!interestedState ? (
        <div style={{ padding: '0 10px 10px 11px', marginBottom: '20px' }}>
          <Typography>step 1</Typography>
          <Typography>我有興趣</Typography>
          <Typography display='inline'>請顯示雙方聯絡</Typography>
          <Button variant="contained" className={classes.rightButton} onClick={interested} color="primary" >
            請顯示
          </Button>
        </div>
      ) : (
          <div style={{ padding: '0 10px 11px 11px' }}>
            <Typography>step 1</Typography>
            <Typography>對方聯絡:</Typography>
            <Typography align="right" ><u>{props.item.brokerPhoneNumber}</u></Typography>
          </div>
        )}
      <div style={{ position: 'relative', padding: '0 11px' }}>
        <input type="file" id="file" style={{ display: 'none' }} ref={fileUploader} onChange={onFileChange} />
        <Typography>step 2</Typography>
        <Typography>請上載保單主頁</Typography>
        <Typography display="inline">以換領禮品</Typography>
        <div>
          <Button variant="contained" className={classes.rightButton} disabled={uploadButtonDisable} onClick={uploadInvoice} color="primary">
            換領禮品
          </Button>
          {uploadButtonDisable && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    </div>
  )
}