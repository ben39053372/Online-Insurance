import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    paddingTop: '20px'
  }
})

const Title = props => {
  const classes = useStyles()
  return (
    <Typography variant='h4' className={classes.title}>
      {props.title}
    </Typography>
  )
}

export default Title