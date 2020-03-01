import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import useStyles from '../../../style/style'

const DriverInfoTab = props => {
  const classes = useStyles()
  const data = [
    { title: '出生日期', contentEn: props.data.driverBirthday, contentCht: props.data.driverBirthday },
    { title: '所屬行業', contentEn: props.data.jobIndustryNameEn, contentCht: props.data.jobIndustryNameCht },
    { title: '職業', contentEn: props.data.ocupationNameEn, contentCht: props.data.ocupationNameEn },
    { title: '駕駛經驗(年)', contentEn: props.data.drivingExpInYear, contentCht: props.data.drivingExpInYear },
    { title: '現有車輛數目', contentEn: props.data.ownCarsCount, contentCht: props.data.ownCarsCount },
    { title: '車身類型', contentEn: props.data.carBodyTypeEn, contentCht: props.data.carBodyTypeCht },
  ]
  return (
    <Grid container>
      {data.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"DriverInfoTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="center">{obj.contentEn || obj.contentCht || 'None'}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default DriverInfoTab