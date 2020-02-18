import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import setting from '../settings/InsureTypeSetting'
import InfoTab from '../style/InfoTab'

const useStyles = makeStyles(theme => InfoTab(theme))

const InsureTypeTab = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {setting.map((obj,index) => {
        return (
          <Grid item xs={4} key={index+"InsureTypeTab"} className={classes.grid}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>{obj.title}</Typography>
            <Typography className={classes.content} align="center">{obj.content}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default InsureTypeTab