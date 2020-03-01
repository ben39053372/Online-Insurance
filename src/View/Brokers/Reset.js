import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import queryString from 'query-string';
import { resetPassword } from '../../api/api/broker'
import useStyles from '../../style/style'

export default props => {
  const classes = useStyles()
  const history = useHistory();
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  useEffect(() => {
    localStorage.setItem('jwt3',queryString.parse(props.location.search).t)
    // eslint-disable-next-line
  }, [])
  const handlepw = e => {
    setPassword(e.target.value)
  }
  const handlepw2 = e => {
    setPassword2(e.target.value)
  }
  const resetPw = () => {
    if(password === password2) {
      resetPassword(password).then(res => {
        console.log(res.data)
        if(res.status === 200){
          history.push("/Brokers/Login");
        }else {
          console.log(res.data.error)
        }
      })
    }
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
        margin="dense"
        value={password2}
        onChange={handlepw2}
        label="input again"
        type="password"
        fullWidth
      />
      <Button onClick={resetPw} variant="contained" color="primary" disabled={password !== password2 || password === '' || password2 === ''} >重設密碼</Button>
    </Paper>
  )
}