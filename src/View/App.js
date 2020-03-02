import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'
import useStyles from '../style/style'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SportsRugbySharp } from '@material-ui/icons'


const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTextField: {
      // Name of the rule
      root: {
        // Some CSS
        margin: '10px 0px',
        borderRadius: '50px',
        backgroundColor: '#FFF',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        backgroundColor: '#EEE',
        width: '100%'
      }
    },
    // MuiInput-underline:hover:not(.Mui-disabled):before
    MuiInput: {
      root: {
        paddingLeft: '40px',
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      underline: {
        '&:before':{
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        "&:after": {
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        "&&&&:hover:before": {
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        '&:hover:not($disabled):before': {
          borderBottom: '0 solid rgba(0, 0, 0, 0)',
          transition: 'none',
          transform: 'none'
        },
        '&:hover:not($disabled):after': {
          borderBottom: '0 solid rgba(0, 0, 0, 0)',
          transition: 'none',
          transform: 'none'
        },
      }
    },
    MuiInputBase: {
      root: {
        color: 'rgba(0,0,0,1)'
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: "translate(0, 1.5px) scale(0.75)",
        transformOrigin: "top left",
        left: '20px',
        top: '5px'
      }
    },
    MuiSelect: {
      root: {
        borderRadius: '50px',
        '&$focused': {
          backgroundColor: 'rgba(0,0,0,1)'
        }
      },
      selectMenu: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: '50px'
      },
      select: {
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      
    }
  },
});

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
