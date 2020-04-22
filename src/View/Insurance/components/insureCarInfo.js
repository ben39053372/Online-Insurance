import React from 'react'
import { Paper, Typography, Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'
import useStyles from '../../../style/style'
import { useSelector } from 'react-redux'

const CarInfo = props => {
  const classes = useStyles()
  const lang = useSelector(state=>state.lang)
  const car = [
    { titleCht: '登記類別', titleEn: 'Registration Type',contentEn: props.data.carRegisterTypeNameEn, contentCht: props.data.carRegisterTypeNameCht },
    { titleCht: '車廠名稱', titleEn: 'Car brand',contentEn: props.data.carBrandNameEn, contentCht: props.data.carBrandNameCht },
    { titleCht: '型號', titleEn: 'Model',contentEn: props.data.carModel, contentCht: props.data.carModel },
    { titleCht: '出廠年份', titleEn: 'Manufacture year',contentEn: props.data.carManufactureYear, contentCht: props.data.carManufactureYear },
    { titleCht: '引擎容量(c.c)', titleEn: 'Cylinder capacity',contentEn: props.data.carCylinderCapacity, contentCht: props.data.carCylinderCapacity },
    { titleCht: '車身類型', titleEn: 'Car body type',contentEn: props.data.carBodyTypeEn, contentCht: props.data.carBodyTypeCht },
    // {titleCht: '車牌',content: },
    { titleCht: '車牌', titleEn: 'license plate number',contentEn: props.data.carLicense, contentCht: props.data.carLicense },
    { titleCht: '保險類別', titleEn: 'Insurance type',contentEn: props.data.insuranceTypeEn, contentCht: props.data.insuranceTypeCht },
  ]
  const driver = [
    { titleCht: '出生日期', titleEn: 'Date of birth', contentEn: props.data.driverBirthday, contentCht: props.data.driverBirthday },
    { titleCht: '所屬行業', titleEn: 'Job industry', contentEn: props.data.jobIndustryNameEn, contentCht: props.data.jobIndustryNameCht },
    { titleCht: '職業', titleEn: 'Occupation', contentEn: props.data.ocupationNameEn, contentCht: props.data.ocupationNameCht },
    { titleCht: '駕駛經驗(年)', titleEn: 'Driving experience(yr)', contentEn: props.data.drivingExpInYear, contentCht: props.data.drivingExpInYear },
    { titleCht: '現有車輛數目', titleEn: 'Cars owned', contentEn: props.data.ownCarsCount, contentCht: props.data.ownCarsCount },
    { titleCht: '車身類型', titleEn: 'Car body type', contentEn: props.data.carBodyTypeEn, contentCht: props.data.carBodyTypeCht },
  ]
  const insurance = [
    { titleCht: '保險類別', titleEn: 'Insurance type', contentEn: props.data.insuranceTypeEn, contentCht: props.data.insuranceTypeCht },
    { titleCht: '投保額', titleEn: 'Insured amount(HK$)', contentEn: props.data.insuredAmount, contentCht: props.data.insuredAmount },
    { titleCht: '投保身份', titleEn: 'Role', contentEn: props.data.driverRoleEn, contentCht: props.data.driverRoleCht },
    { titleCht: '無索償折扣(NCD)', titleEn: 'No claim discount', contentEn: props.data.noClaimDiscount, contentCht: props.data.noClaimDiscount }
  ]

  return (
    <Paper elevation={0}>
      <Typography align="center" variant="subtitle1">{lang==='eng'?'Request car information':'報價車款資料'}</Typography>

      <List dense>
        <ListSubheader disableSticky>{lang==='eng'?'Car information':'車輛資料'}</ListSubheader>
        {car.map((item, index) => (
          <React.Fragment key={'carList'+index}>
            <ListItem>
              <ListItemText
                primary={<Typography className={classes.listPrimary} display="inline">{lang==='eng' ? item.titleEn : item.titleCht}</Typography>}
                secondary={<Typography className={classes.listSecondary}>{lang==='eng'?item.contentEn : item.contentCht}</Typography>}
              />
            </ListItem>
            {index !== car.length-1 && <Divider /> }
          </React.Fragment>
        ))}
      </List>
      <List dense>
        <ListSubheader disableSticky>{lang==='eng'?'Driver information':'車主資料'}</ListSubheader>
        {driver.map((item, index) => (
          <React.Fragment key={'dirver'+index}>
            <ListItem>
              <ListItemText
                primary={<Typography className={classes.listPrimary} display="inline">{lang==='eng' ? item.titleEn : item.titleCht}</Typography>}
                secondary={<Typography className={classes.listSecondary}>{lang==='eng'?item.contentEn : item.contentCht}</Typography>}
              />
            </ListItem>
            {index !== driver.length-1 && <Divider /> }
          </React.Fragment>
        ))}
      </List>
      <List dense>
        <ListSubheader disableSticky>{lang==='eng'?'Insurance type':'投保類別'}</ListSubheader>
        {insurance.map((item, index) => (
          <React.Fragment key={'insuranceList'+index}>
            <ListItem>
              <ListItemText
                primary={<Typography className={classes.listPrimary} display="inline">{lang==='eng' ? item.titleEn : item.titleCht}</Typography>}
                secondary={<Typography className={classes.listSecondary}>{lang==='eng'?item.contentEn : item.contentCht}</Typography>}
              />
            </ListItem>
            {index !== insurance.length-1 && <Divider /> }
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
}

export default CarInfo