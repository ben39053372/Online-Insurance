import React from 'react'
import { Paper, Typography, Grid, makeStyles } from '@material-ui/core'

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

const useStyles = makeStyles({
  odd: {
    backgroundColor: '#bbb',
    height: '90px',
    padding: '8px',
    margin: '3px'
  },
  even: {
    backgroundColor: '#ccc',
    height: '90px',
    padding: '8px',
    margin: '3px'
  }
})

const QuoteDetail = () => {
  const classes = useStyles()
  return (
    <Paper elevation={0}>
      <Typography align="center" variant="subtitle1" style={{ padding: '10px', marginTop: '16px' }}>
        報價詳情
      </Typography>
      <Grid container direction="row">
        <Grid item xs={6} container direction="column">
          {setting.map((array, i) => (
            <Grid container item key={i} alignItems="center" className={i % 2 ? classes.odd : classes.even}>
              {(array).map((arr, j) => (
                <Typography key={arr} display="block" style={{fontSize: '14px', width: '100%'}}>{arr}</Typography>
              ))}
            </Grid>
          ))}
          <Grid item xs={6} container direction="column">
            <>
            </>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default QuoteDetail

