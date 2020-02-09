import React from 'react'
import { renderRoutes } from 'react-router-config'
import BreadcrumbBar from '../component/BreadcrumbBar'
import {Container, CssBaseline} from '@material-ui/core'

const Index = ({route}) => {
  return (
    <Container maxWidth='md'>
      <CssBaseline />
      <BreadcrumbBar/>
      {renderRoutes(route.routes)}
    </Container>
  )
}

export default Index