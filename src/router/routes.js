import Home from '../View/Insurance/Home'
import SignUp from '../View/Bookers/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';
import RequestList from '../View/Bookers/RequestList'

const routes = [
  {
    name: 'home',
    component: Index,
    path: '/',
    exact: true,
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
        exact: false
      }
    ]
  },{
    name: 'Brokers',
    component: Index,
    path: '/Brokers',
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
  }

]

export default routes
