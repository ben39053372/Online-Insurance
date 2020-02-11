import Home from '../View/Insurance/Home'
import SignUp from '../View/Bookers/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';
import RequestList from '../View/Bookers/RequestList'

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
        exact: false
      },
      {
        name: 'RequestList',
        path: '/Brokers/RequestList',
        component: RequestList,
        exact: false
      }
    ]
  },{
    name: 'home',
    component: Index,
    path: '/',
    exact: false,
    routes: [
      {
        name: 'Home',
        path: '/home',
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
  }

]

export default routes
