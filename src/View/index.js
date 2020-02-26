import React from 'react'
import { renderRoutes } from 'react-router-config'
import BreadcrumbBar from '../component/BreadcrumbBar'
import {CssBaseline, Container} from '@material-ui/core'

const Index = ({route}) => {
  return (
    <Container>
      <CssBaseline />
      <BreadcrumbBar/>
      {renderRoutes(route.routes)}
    </Container>
  )
}

export default Index