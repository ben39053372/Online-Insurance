import Home from '../View/Insurance/Home'
import SignUp from '../View/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';

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
        exact: true
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
        exact: true
      }
    ]
  },
  {
    name: 'Bookers',
    component: Index,
    path: '/Bookers',
    routes: [
      {
        name: 'Login',
        path: '/Bookers/Login',
        component: Home,
        exact: true
      },
      {
        name: 'Sign Up',
        path: '/Bookers/SignUp',
        component: SignUp,
        exact: false
      },
      {
        name: 'Car Info',
        path: '/Bookers/CarInfo',
        component: CarInfo,
        exact: true
      }
    ]
  }

]

export default routes
