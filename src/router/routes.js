import Home from '../View/Home'
import SignUp from '../View/SignUp'
import Index from '../View/index';
import CarInfo from '../View/CarInfo';

const routes = [
  {
    name: 'Insurance',
    component: Index,
    path: '/Insurance',
    routes: [
      {
        name: 'Home',
        path: '/',
        component: Home,
        exact: true
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
        exact: true
      }
    ]
  },
  {
    name: 'Bookers',
    component: Index,
    path: 'Bookers',
    routes: [
      {
        name: ''
      }
    ]
  }

]

export default routes
