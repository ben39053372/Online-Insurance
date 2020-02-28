import React from 'react'
import { Grid, Typography } from '@material-ui/core';

// {title: '登記類別', content: 'data 1'},
//   {title: '車廠名稱', content: 'data 2'},
//   {title: '型號*', content: 'data 3'},
//   {title: '出廠年份', content: 'data 4'},
//   {title: '引擎容量(c.c)', content: 'data 5'},
//   {title: '車身類型', content: 'data 6'},
//   {title: '車牌', content: 'data 7'},
//   {title: '保險類別', content: 'data 8'},

const CarInfoTab = props => {
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
    <Grid container style={{ padding: '10px' }}>
      {data.map((obj, index) => {
        return (
          <Grid item xs={4} key={index + "CarInfoTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="left">{obj.contentEn || obj.contentCht || 'None'}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CarInfoTab