import Home from '../View/Insurance/Home'
import SignUp from '../View/Bookers/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';
import RequestList from '../View/Bookers/RequestList'

const routes = [
  {
    name: 'Insurance',
    component: Index,
    path: '/Insurance',
    routes: [
      {
        name: 'Home',
        path: '/Insurance/home',
        component: Home,
        exact: false
      },
      {
        name: 'Sign Up',
        path: '/Insurance/SignUp',
        component: SignUp,
        exact: false
      },
      {
        name: 'Car Info',
        path: '/Insurance/CarInfo',
        component: CarInfo,
        exact: false
      }
    ]
  },
  {
    name: 'Bookers',
    component: Index,
    path: '/Bookers',
    routes: [
      {
        name: 'Sign Up',
        path: '/Bookers/Login',
        component: SignUp,
        exact: false
      },
      {
        name: 'RequestList',
        path: '/Bookers/RequestList',
        component: RequestList,
        exact: false
      }
    ]
  }

]

export default routes
