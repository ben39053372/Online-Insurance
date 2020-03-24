import React, { useState, useRef, useEffect } from 'react';
import { Button, Typography, CircularProgress, List, ListSubheader, ListItem, ListItemText, Divider, Link } from '@material-ui/core'
import { putInterested, postClosing, giveaway } from '../../../api/api/quotation'
import { useHistory } from 'react-router-dom'
import useStyles from '../../../style/style'
import { useSelector } from 'react-redux'

export default props => {
  const [link , setLink] = useState('')
  useEffect(() => {
    giveaway().then( res => {
      console.log(res.data.giftLink.giftImageLink)
      setLink(res.data.giftLink.giftImageLink)
    })
  },[])
  const classes = useStyles()
  const history = useHistory()
  const setting2 = [
    { titleCht: '保險公司', titleEn: '', contentEn: props.item.insuranceCompanyNameEn, contentCht: props.item.insuranceCompanyNameCht },
    { titleCht: '投保「全保」 * (包括第三者責任保險)', titleEn: '', content: props.item.insurancePlanTypeEn, contentCht: props.item.insurancePlanTypeCht },
    { titleCht: '特惠一年保養', titleEn: '', contentEn: props.item.oneYearInsuranceFee, contentCht: props.item.oneYearInsuranceFee },
    { titleCht: 'General Excess * 自身車輛財物損毀', titleEn: '', contentEn: props.item.generalExcess, contentCht: props.item.generalExcess },
    { titleCht: 'Theft Loss Excess * 全車被盗', titleEn: '', contentEn: props.item.theftLossExcess, contentCht: props.item.theftLossExcess },
    { titleCht: 'Parking * 自身車輛財物損毀 * 於停泊時', titleEn: '', contentEn: props.item.parking, contentCht: props.item.parking },
    { titleCht: 'TPPD * 第三者財物損失 * 投保人', titleEn: '', contentEn: props.item.TPPD, contentCht: props.item.TPPD },
    { titleCht: 'TPPD-Y * 財物損失 * 低於25歲之司機', titleEn: '', contentEn: props.item.TPPDY, contentCht: props.item.TPPDY },
    { titleCht: 'TPPD-I * 財物損失 * 少於2年駕駛經驗', titleEn: '', contentEn: props.item.TPPDI, contentCht:props.item.TPPDI },
    { titleCht: 'TPPD-U * 財物損失 * 不記名司機', titleEn: '', contentEn: props.item.TPPDU, contentCht: props.item.TPPDU }
  ]
  const interested = () => {
    putInterested(props.item.quotationId).then(res => {
      // console.log(res)
    })
    setInterestedState(true)
  }
  const uploadInvoice = () => {
    // console.log('upload')
    fileUploader.current.click()
  }
  const lang = useSelector(state=>state.lang)
  const [interestedState, setInterestedState] = useState(props.item.isUserInterested)
  const [uploadButtonDisable, setUploadButtonDisable] = useState(false)
  const fileUploader = useRef(null);
  const onFileChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setUploadButtonDisable(true)
    var file = event.target.files[0];
    if (file !== undefined) {
      // console.log(file)
      postClosing(props.item.quotationId, file).then(res => {
        // console.log(res)
        if (res.status === 200 || res.error === 'Closing record exists already.') {
          setUploadButtonDisable(false)
          localStorage.removeItem('jwt1')
          history.push('/Customers/home')
        }
      }).catch(err => {
        // console.log(err)
        setUploadButtonDisable(false)
      })
    }
  }

  return (
    <div style={{ margin: '0 3px' }}>
      <List dense >
        <ListSubheader disableSticky style={{ background: '#922' }}>{lang==='eng'?'':'報價詳情'}</ListSubheader>
        {setting2.map((item, index) => (
          <React.Fragment key={'carList' + index}>
            <ListItem>
              <ListItemText
                primary={
                  lang==='eng'?
                  item.titleEn.split(' * ').map(text => (
                    <Typography key={text} className={classes.listPrimary} display="inline">{text}<br /></Typography>
                  ))
                  :
                  item.titleCht.split(' * ').map(text => (
                    <Typography key={text} className={classes.listPrimary} display="inline">{text}<br /></Typography>
                  ))
                }
                secondary={
                  lang==='eng'?
                  <Typography className={classes.listSecondary}>{item.contentEn}</Typography>
                  :
                  <Typography className={classes.listSecondary}>{item.contentCht}</Typography>
                }
              />
            </ListItem>
            {index !== setting2.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      {!interestedState ? (
        <div style={{ padding: '0 10px 10px 11px', marginBottom: '20px' }}>
          <Typography>{lang==='eng'?'':'step 1'}</Typography>
          <Typography>{lang==='eng'?'':'我有興趣'}</Typography>
          <Typography display='inline'>{lang==='eng'?'':'請顯示雙方聯絡'}</Typography>
          <Button variant="contained" className={classes.rightButton} onClick={interested} color="primary" >
            {lang==='eng'?'':'請顯示'}
          </Button>
        </div>
      ) : (
          <div style={{ padding: '0 10px 11px 11px' }}>
            <Typography>{lang==='eng'?'':'step 1'}</Typography>
            <Typography>{lang==='eng'?'':'對方聯絡:'}</Typography>
            <Typography align="right" ><u>{props.item.brokerPhoneNumber}</u></Typography>
          </div>
        )}
      <div style={{ position: 'relative', padding: '0 11px' }}>
        <input type="file" id="file" style={{ display: 'none' }} ref={fileUploader} onChange={onFileChange} />
        <Typography>{lang==='eng'?'':'step 2'}</Typography>
        <Typography>{lang==='eng'?'':'請上載保單主頁'}</Typography>
        <Typography display="inline">{lang==='eng'?'':'以換領禮品'}</Typography>
        <Typography>
          <Link target="_blank" href={link}>{lang==='eng'?'':'禮品詳情'}</Link>
        </Typography>
        <div>
          <Button variant="contained" className={classes.rightButton} disabled={uploadButtonDisable} onClick={uploadInvoice} color="primary">
          {lang==='eng'?'':'換領禮品'}
          </Button>
          {uploadButtonDisable && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    </div>
  )
}