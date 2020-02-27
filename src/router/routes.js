import Home from '../View/Insurance/Home'
import SignUp from '../View/Brokers/SignUp'
import Index from '../View/index';
import CarInfo from '../View/Insurance/CarInfo';
import RequestList from '../View/Brokers/RequestList'
import RequestListDetail from '../View/Brokers/RequestListDetail'
import Reset from '../View/Brokers/Reset'

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
        name: 'Reset Password',
        path: '/Brokers/Reset',
        component: Reset,
      },
      {
        name: 'RequestList',
        path: '/Brokers/RequestList',
        component: RequestList,
        exact: false
      },
      {
        name: 'RequestListDetail',
        path: '/Brokers/RequestListDetail',
        component: RequestListDetail,
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
        exact: false
      },
      {
        name: 'Car Info',
        path: 'Customers/CarInfo',
        component: CarInfo,
        exact: false
      }
    ]
  }

]

export default routes
