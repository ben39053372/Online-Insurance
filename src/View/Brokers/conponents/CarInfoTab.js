import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import setting from '../settings/CarInfoSetting';
import InfoTab from '../styles/InfoTab'

const useStyles = makeStyles(theme => InfoTab(theme));

const CarInfoTab = () => {
  const classes = useStyles();
  return (
    <Grid container style={{padding: '10px'}}>
      {setting.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"CarInfoTab"} className={classes.grid}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography className={classes.content} align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CarInfoTab