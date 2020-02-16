import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import setting from './DriverInfoSetting'

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

const DriverInfoTab = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {setting.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"DriverInfoTab"} className={classes.grid}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography className={classes.content} align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default DriverInfoTab