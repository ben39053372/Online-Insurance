import React from 'react'
import { renderRoutes } from 'react-router-config'
// import BreadcrumbBar from '../component/BreadcrumbBar'
import {CssBaseline} from '@material-ui/core'


const Index = ({route}) => {

  return (
    <>
      <CssBaseline />
      {/* <BreadcrumbBar/> */}
      {renderRoutes(route.routes)}
    </>
  )
}

export default Index