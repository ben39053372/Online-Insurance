import React from 'react'
import setting from '../settings/DriverInfoSetting'
import {Grid, Typography} from '@material-ui/core'

const DriverInfoTab = () => {
  return (
    <Grid container>
      {setting.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"DriverInfoTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default DriverInfoTab