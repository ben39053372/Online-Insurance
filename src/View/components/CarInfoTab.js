import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import setting from './CarInfoSetting'

const useStyles = makeStyles({
  title: {
    fontSize: '12px'
  },
  content: {
    fontSize: '14px',
    fontWeight: 'bold'
  },
  grid: {
    padding: '14px'
  }
})

const CarInfoTab = () => {
  const classes = useStyles();
  return (
    <Grid container style={{padding: '10px'}}>
      {setting.map(obj => {
        return (
          <Grid item xs={4} className={classes.grid}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography className={classes.content} align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CarInfoTab