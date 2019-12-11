import React from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    paddingTop: '20px'
  }
})

const Title = props => {
  const classes = useStyles()
  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        {props.title}
      </Typography>
    </Grid>
  )
}

export default Title