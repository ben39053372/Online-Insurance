import React from 'react'
import { BrowserRouter as BRouter } from 'react-router-dom'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import BreadcrumbBar from '../component/BreadcrumbBar'

const Router = () => {
  return (
    <>
      <BRouter>
        <BreadcrumbBar />
          {renderRoutes(routes)}
      </BRouter>
    </>
  )
}

export default Router
