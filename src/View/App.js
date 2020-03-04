import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'
import useStyles from '../style/style'
import theme from '../style/theme'
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" className={classes.header} variant="h4" href="/Customers/home" component='a'>
            {window.location.pathname.split('/')[1]} Apps
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {renderRoutes(routes)}
      </main>
    </ThemeProvider>
  )
}


export default App;
