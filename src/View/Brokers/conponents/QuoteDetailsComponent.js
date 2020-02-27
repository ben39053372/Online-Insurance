import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

const setting = [
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

export default (item) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={6} container direction="column">
          {setting.map((array, i) => (
            <Grid container item key={i} alignItems="center">
              {(array).map((arr, j) => (
                <Typography key={arr} display="block" style={{ fontSize: '14px', width: '100%' }}>{arr}</Typography>
              ))}
            </Grid>
          ))}
          <Grid item xs={6} container direction="column">
            <>
            </>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ padding: '12px' }}>
        <Typography>車主資料</Typography>
        <Typography>未授權顯示</Typography>
      </div>
      <div style={{ padding: '12px' }}>
        <Button variant="contained" color="primary" style={{ float: 'right', marginTop: '12px' }}>
          提交報價
          </Button>
        <Typography>你的報價將會即時電郵給車主</Typography>
      </div>
    </div>
  )
}