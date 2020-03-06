import React from 'react'
import { AppBar, Toolbar,IconButton, Typography, CssBaseline } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'
import useStyles from '../style/style'
import theme from '../style/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ChevronLeftIcon style={{ fontSize: 30 }}/>
          </IconButton>
          <Typography align="center" className={classes.header} variant="h4" href="/Customers/home" component='a'>
            HeSheCar
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon style={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main style={{padding: '10px 0'}}>
        {renderRoutes(routes)}
      </main>
    </ThemeProvider>
  )
}


export default App;
