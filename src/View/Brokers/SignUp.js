import React, { useState } from 'react'
import {
  Paper,
  Typography,
  TextField,
  Fab,
  InputAdornment,
  Grid,
  Collapse,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NavigationIcon from '@material-ui/icons/Navigation';
import CloseIcon from '@material-ui/icons/Close';
import md5 from 'md5'
import { useHistory } from 'react-router-dom'
import { login, forgotPassword} from '../../api/api/broker'
import useStyles from '../../style/style'

const SignUp = () => {
  const classes = useStyles()
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [loginState, setLoginState] = useState('Error')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogAlertOpen, setDialogAlertOpen] = useState(false)
  const [emailState, setEmailState] = useState('Error')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const onLoginClick = () => {
    if (userName.legnth === 0 || password.length === 0) {
      setLoginState('請輸入ID 和 密碼')
      setOpen(true)
    } else {
      login(userName, md5(password))
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('jwt2', res.data.staffToken)
            history.push()
            setLoginState('')
            setOpen(false)
          } else {
            setLoginState(res.data.error)
            setOpen(true)
          }
        })
        .catch(err => {
          setLoginState(err)
          setOpen(true)
        })
    }
  }
  const onForgetClick = () => {
    setDialogOpen(true)
  }
  const handleClose = () => {
    setDialogOpen(false)
    setDialogAlertOpen(false)
  }
  const onEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleSnackBarClose = () => {
    setSnackbarOpen(false)
  }
  const submitForgot = () => {
    if (email.length !== 0) {
      forgotPassword(email)
        .then(res => {
          if (res.status === 200) {
            setDialogAlertOpen(false)
            setDialogOpen(false)
            setSnackbarOpen(true)
            setOpen(false)
          } else {
            setEmailState(res.data.error)
            setDialogAlertOpen(true)
          }
        })
        .catch(err => {
          setEmailState(err)
          setDialogAlertOpen(true)
        })
    } else {
      setEmailState('請輸入Email')
      setDialogAlertOpen(true)
    }

  }
  return (
    <>
      <div>
        Banner
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        key={`top,center`}
        open={snackbarOpen}
        onClose={handleSnackBarClose}
        autoHideDuration={5000}
        message="已發送重設電郵"
      />
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>
          忘記密碼
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            輸入你的電郵確認身份，用以重設密碼。
        </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={email}
            onChange={onEmailChange}
            label="Email Address"
            type="email"
            fullWidth
          />
          <Collapse in={dialogAlertOpen}>
            <Alert
              severity="error"
              action={
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setDialogAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {emailState}
            </Alert>
          </Collapse>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            我記得密碼了
          </Button>
          <Button onClick={submitForgot} color="primary">
            重設密碼
          </Button>
        </DialogActions>
      </Dialog>
      <Paper>
        <Typography>
          登入
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          label="Broker ID"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="input-with-icon-textfield"
          label="Password"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {loginState}
          </Alert>
        </Collapse>
        <Grid container alignItems="center" justify="center">
          <Grid container item xs={6}>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              onClick={onForgetClick}
            >
              <NavigationIcon />
              忘記密碼
            </Fab>
          </Grid>
          <Grid container item xs={6}>
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              onClick={onLoginClick}
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