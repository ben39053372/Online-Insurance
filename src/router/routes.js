import Home from '../View/Insurance/Home'
import SignUp from '../View/Brokers/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';
import RequestList from '../View/Brokers/RequestList'
import RequestListDetail from '../View/Brokers/RequestListDetail'
import Reset from '../View/Brokers/Reset'
import { ishaveTokenOne, ishaveTokenTwo } from '../utils/Auth'
import { Redirect } from 'react-router-dom'
import React from 'react'

const routes = [
  {
    name: 'Brokers',
    component: Index,
    path: '/Brokers',
    exact: false,
    routes: [
      {
        name: 'Sign Up',
        path: '/Brokers/Login',
        component: SignUp,
        exact: false,
        render: () => ishaveTokenTwo() ? <Redirect to='/Brokers/RequestList'/> : <SignUp />
      },
      {
        name: 'Reset Password',
        path: '/Brokers/Reset',
        component: Reset,
      },
      {
        name: 'RequestListDetail',
        path: '/Brokers/RequestListDetail/:id',
        component: RequestListDetail,
        render: () => ishaveTokenTwo() ? <RequestListDetail /> : <Redirect to="/Brokers/Login" />,
        exact: false
      },
      {
        name: 'RequestList',
        path: '/Brokers/RequestList',
        component: RequestList,
        render: () => ishaveTokenTwo() ? <RequestList /> : <Redirect to='/Brokers/Login'/>,
        exact: false
      }
    ]
  },{
    name: 'Customers',
    component: Index,
    path: '/Customers',
    exact: false,
    routes: [
      {
        name: 'Home',
        path: '/Customers/home',
        component: Home,        
        exact: false,
        render: () => ishaveTokenOne() ? (<Redirect to='/Customers/CarInfo' /> ):(<Home/>)
      },
      {
        name: 'Car Info',
        path: '/Customers/CarInfo',
        component: CarInfo,
        exact: false,
        render: () => ishaveTokenOne() ? (<CarInfo/>) : (<Redirect to='/Customers/home'/>)
      }
    ]
  }

]

export default routes
