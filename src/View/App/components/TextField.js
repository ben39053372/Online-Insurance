import React from 'react'
import { TextField, InputAdornment, Grid } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email'
import KeyIcon from '@material-ui/icons/VpnKey'

export default props => {
  return (
    <Grid item xs={12}>
      <TextField
        label={props.label}
        style={{width: props.width+'vw'}}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              {props.icon === 'key'? <KeyIcon/>:<> </> }
              {props.icon === 'email'? <EmailIcon/>:<> </> }
            </InputAdornment>
          )
        }}
      />
    </Grid>
  )
}