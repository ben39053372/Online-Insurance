import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#fa3'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
})

const Layout = props => {
  const classes = useStyle()
  return (
    <div style={{backgroundColor: '#ddd', height: '100vh'}}>
      <AppBar className={classes.root} position='sticky'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            Customer App
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
