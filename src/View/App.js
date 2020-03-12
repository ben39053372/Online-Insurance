import React from 'react'
import { AppBar, Toolbar,IconButton, Typography, CssBaseline, Container } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'
import useStyles from '../style/style'
import theme from '../style/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom'

const App = () => {
  const history = useHistory()
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {window.location.pathname.split('/')[1] === 'Brokers' && (
            <IconButton edge="start" onClick={() => history.goBack()} className={classes.menuButton} color="inherit" aria-label="menu">
              <ChevronLeftIcon style={{ fontSize: 30 }}/>
            </IconButton>
          )}
          <Typography align="center" className={classes.header} variant="h4" href="/Customers/home" component='a'>
            HeSheCar
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon style={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {renderRoutes(routes)}
      </Container>
    </ThemeProvider>
  )
}


export default App;
