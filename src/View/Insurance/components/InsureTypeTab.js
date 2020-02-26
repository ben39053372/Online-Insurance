import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import setting from '../settings/InsureTypeSetting'

const InsureTypeTab = () => {
  return (
    <Grid container>
      {setting.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"InsureTypeTab"}>
            <Typography color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default InsureTypeTab