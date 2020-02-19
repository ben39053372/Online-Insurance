import React from 'react'
import { Paper, Typography, TextField, Fab, InputAdornment, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NavigationIcon from '@material-ui/icons/Navigation';
const SignUp = props => {
  console.log(props)
  return (
    <>
      <div style={{ width: '100%', height: '180px' }}>
        Banner
      </div>
      <Paper style={{marginBottom: '16px'}}>
        <Typography>
          登入
        </Typography>
        <TextField
          style={{ margin: '8px', width: '95%' }}
          id="input-with-icon-textfield"
          label="Broker ID"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          style={{ margin: '8px', width: '95%' }}
          id="input-with-icon-textfield"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Grid container alignItems="center" justify="center" style={{padding: '16px'}}>
          <Grid container item xs={6} style={{justifyContent: 'center'}}>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              style={{width: '120px'}}
            >
              <NavigationIcon />
              忘記密碼
            </Fab>
          </Grid>
          <Grid container item xs={6} style={{justifyContent: 'center'}}>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              style={{width: '120px'}}
            >
              <NavigationIcon />
               登入 
            </Fab>
          </Grid>
        </Grid>

      </Paper>
    </>
  )
}

export default SignUp