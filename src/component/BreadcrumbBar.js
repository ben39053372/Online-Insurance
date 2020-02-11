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
      <Breadcrumbs aria-label="breadcrumb">
        <IconButton color="inherit" aria-label="open drawer">
          <Menu />
        </IconButton>
        {matchedRoutes.map((matchRoute, i) => {
          const { path, name } = matchRoute.route;
          const isActive = path === location.pathname;
          return isActive ? (
            <Link component='span' underline="none" aria-current="page" color="textPrimary" key={i} >{name}</Link>
          ) : (
              <Link color='inherit' key={i} href={path}>{name}</Link>
            )
        })}
      </Breadcrumbs>
    </>
  )
}

export default BreadcrumbBar