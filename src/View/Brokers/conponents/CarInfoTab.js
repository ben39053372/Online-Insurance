import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../../../style/style'

const CarInfoTab = props => {
  const classes = useStyles()
  useEffect(() => {
    console.log(props)
  })
  const data = [
    { title: '登記類別', contentEn: props.data.carRegisterTypeNameEn, contentCht: props.data.carRegisterTypeNameCht },
      { title: '車廠名稱', contentEn: props.data.carBrandNameEn, contentCht: props.data.carBrandNameCht },
      { title: '型號*', contentEn: props.data.carModel, contentCht: props.data.carModel },
      { title: '出廠年份', contentEn: props.data.carManufactureYear, contentCht: props.data.carManufactureYear },
      { title: '引擎容量(c.c)', contentEn: props.data.carCylinderCapacity, contentCht: props.data.carCylinderCapacity },
      { title: '車身類型', contentEn: props.data.carBodyTypeEn, contentCht: props.data.carBodyTypeCht },
      // {title: '車牌', contentEn: props.data, contentCht: props.data},
      { title: '保險類別', contentEn: props.data.insuranceTypeEn, contentCht: props.data.insuranceTypeCht },
  ]
  return (
    <Grid container>
      {data.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"CarInfoTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="center">{obj.contentEn || obj.contentCht || 'None'}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CarInfoTab