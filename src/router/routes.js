import Home from '../View/Home'
import SignUp from '../View/SignUp'
import Index from '../View/index';

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
        exact: true
      },
      {
        name: 'Sign Up',
        path: '/SignUp',
        component: SignUp,
        exact: false
      },
    ]
  },

]

export default routes
