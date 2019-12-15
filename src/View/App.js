import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, CssBaseline, Link } from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import CarList from './CarList/CarList'

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" href="/" className={classes.title}>
            Customer App
          </Typography>
        </Toolbar>
      </AppBar>
    <main>
      <Router>
        <Switch>
          <Route path="/car_list" component={CarList} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </main>
    </div >
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

export default App;
