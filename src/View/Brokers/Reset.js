import React, { useState, useEffect } from 'react'
import { Paper, TextField, Typography } from '@material-ui/core';
import queryString from 'query-string'

export default props => {
  // eslint-disable-next-line 
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  useEffect(() => {
    setToken(queryString.parse(props.location.search).t)
  }, [props.location.search])
  const handlepw = e => {
    setPassword(e.target.value)
  }
  const handlepw2 = e => {
    setPassword2(e.target.value)
  }
  return (
    <Paper>
      <Typography>reset password</Typography>
      <TextField
        autoFocus
        margin="dense"
        value={password}
        onChange={handlepw}
        label=" new password"
        type="password"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        value={password2}
        onChange={handlepw2}
        label="input again"
        type="password"
        fullWidth
      />
    </Paper>
  )
}