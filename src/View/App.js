import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, CssBaseline } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'

const App = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" href="/Customers/home" component='a' className={classes.title}>
            {window.location.pathname.split('/')[1]} Apps
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {renderRoutes(routes)}
      </main>
    </div >
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    background: '#fff',
    overflowX: "hidden"
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#FFF',
    textDecoration: 'none',
  }
}));

export default App;
