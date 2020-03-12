import React, { useState, useEffect } from 'react'
import { Paper, Typography, Tabs, Divider, Tab, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'
import useStyles from '../../../style/style'

const CarInfo = props => {
  const classes = useStyles()
  const car = [
    { title: '登記類別', contentCht: props.data.carRegisterTypeNameCht },
    { title: '車廠名稱', contentCht: props.data.carBrandNameCht },
    { title: '型號', contentCht: props.data.carModel },
    { title: '出廠年份', contentCht: props.data.carManufactureYear },
    { title: '引擎容量(c.c)', contentCht: props.data.carCylinderCapacity },
    { title: '車身類型', contentCht: props.data.carBodyTypeCht },
    // {title: '車牌',content: },
    { title: '保險類別', contentCht: props.data.insuranceTypeCht },
  ]
  const driver = [
    { title: '出生日期', contentEn: props.data.driverBirthday, contentCht: props.data.driverBirthday },
    { title: '所屬行業', contentEn: props.data.jobIndustryNameEn, contentCht: props.data.jobIndustryNameCht },
    { title: '職業', contentEn: props.data.ocupationNameEn, contentCht: props.data.ocupationNameCht },
    { title: '駕駛經驗(年)', contentEn: props.data.drivingExpInYear, contentCht: props.data.drivingExpInYear },
    { title: '現有車輛數目', contentEn: props.data.ownCarsCount, contentCht: props.data.ownCarsCount },
    { title: '車身類型', contentEn: props.data.carBodyTypeEn, contentCht: props.data.carBodyTypeCht },
  ]
  const insurance = [
    { title: '保險類別', contentEn: props.data.insuranceTypeEn, contentCht: props.data.insuranceTypeCht },
    { title: '投保額', contentEn: props.data.insuredAmount, contentCht: props.data.insuredAmount },
    { title: '投保身份', contentEn: props.data.driverRoleEn, contentCht: props.data.driverRoleCht },
    { title: '無索償折扣(NCD)', contentEn: props.data.noClaimDiscount, contentCht: props.data.noClaimDiscount }
  ]
  useEffect(() => {
    console.log('insureCarInfo:', props.data)
  }, [props])
  return (
    <Paper elevation={0}>
      <Typography align="center" variant="subtitle1">報價車款資料</Typography>

      <List dense>
        <ListSubheader disableSticky>車輛資料</ListSubheader>
        {car.map((item, index) => (
          <React.Fragment key={'carList'+index}>
            <ListItem>
              <ListItemText
                primary={<Typography className={classes.listPrimary} display="inline">{item.title}</Typography>}
                secondary={<Typography className={classes.listSecondary}>{item.contentCht}</Typography>}
              />
            </ListItem>
            {index !== car.length-1 && <Divider /> }
          </React.Fragment>
        ))}
      </List>
      <List dense>
        <ListSubheader disableSticky>車主資料</ListSubheader>
        {driver.map((item, index) => (
          <React.Fragment key={'dirver'+index}>
            <ListItem>
              <ListItemText
                primary={<Typography className={classes.listPrimary} display="inline">{item.title}</Typography>}
                secondary={<Typography className={classes.listSecondary}>{item.contentCht}</Typography>}
              />
            </ListItem>
            {index !== driver.length-1 && <Divider /> }
          </React.Fragment>
        ))}
      </List>
      <List dense>
        <ListSubheader disableSticky>投保類別</ListSubheader>
        {insurance.map((item, index) => (
          <React.Fragment key={'insuranceList'+index}>
            <ListItem>
              <ListItemText
                primary={<Typography className={classes.listPrimary} display="inline">{item.title}</Typography>}
                secondary={<Typography className={classes.listSecondary}>{item.contentCht}</Typography>}
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