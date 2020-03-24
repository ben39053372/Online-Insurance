import React,{ useState } from 'react'
import { AppBar, Toolbar,IconButton, Typography, CssBaseline, Container, Menu, MenuItem } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'
import useStyles from '../style/style'
import theme from '../style/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const App = () => {
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleChinseClose = () => {
    setAnchorEl(null);
    dispatch({
      type: 'SWITCH_LANG',
      payload: 'cht'
    })
  }

  const handleEngClose = () => {
    setAnchorEl(null)
    dispatch({
      type: 'SWITCH_LANG',
      payload: 'eng'
    })
  }

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
          <IconButton edge="end" onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon style={{ fontSize: 30 }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleChinseClose}>中文</MenuItem>
            <MenuItem onClick={handleEngClose}>ENG</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {renderRoutes(routes)}
      </Container>
    </ThemeProvider>
  )
}


export default App;
