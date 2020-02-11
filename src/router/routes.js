import Home from '../View/Insurance/Home'
import SignUp from '../View/Bookers/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';
import RequestList from '../View/Bookers/RequestList'

const routes = [
  {
    name: 'Insurance',
    component: Index,
    path: '/',
    routes: [
      {
        name: 'Home',
        path: '/',
        component: Home,
        exact: false
      },
      {
        name: 'Sign Up',
        path: '/SignUp',
        component: SignUp,
        exact: false
      },
      {
        name: 'Car Info',
        path: '/CarInfo',
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
