import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import setting from '../settings/CarInfoSetting';

const CarInfoTab = () => {
  return (
    <Grid container style={{padding: '10px'}}>
      {setting.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"CarInfoTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CarInfoTab