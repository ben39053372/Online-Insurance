import React from 'react'
import { useLocation } from 'react-router'
import { matchRoutes } from 'react-router-config'
import routes from '../router/routes'
import { Breadcrumbs, Link, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const BreadcrumbBar = () => {
  const location = useLocation()
  const matchedRoutes = matchRoutes(routes, location.pathname)
  return (
    <>
      <Breadcrumbs>
        <IconButton color="inherit">
          <Menu />
        </IconButton>
        {matchedRoutes.map((matchRoute, i) => {
          console.log(matchRoute)
          const { path, name } = matchRoute.route;
          const isActive = path === location.pathname;
          return isActive ? (
            <Link component='span' underline="none" color="textPrimary" key={i} >{name}</Link>
          ) : (
              <Link color='inherit' key={i}>{name}</Link>
            )
        })}
      </Breadcrumbs>
    </>
  )
}

export default BreadcrumbBar