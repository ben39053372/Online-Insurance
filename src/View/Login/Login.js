import React, { useState } from 'react'
import { Typography, TextField, Container, Button, Grid, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8)
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: '12px',
    fontSize: '20px',
    width: '100%'
  }
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles()

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">SIGN IN</Typography>
          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            margin='normal'
            required
            fullWidth
            label="Email Address"
            type='email'
            autoFocus
          />
          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            margin='normal'
            required
            fullWidth
            label="Password"
            type="password"
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            SIGN IN
            </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot_pw">Forgot password</Link>
            </Grid>
            <Grid>
              <Link href="/sign_up">Sign up</Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Login;

