import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'
import routes from '../router/routes'
import useStyles from '../style/style'


const App = () => {
  const classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" href="/Customers/home" component='a'>
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


export default App;
