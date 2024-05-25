import Home from '~/pages/Home';
import Produce from '~/pages/Produce';
import Cart from '~/pages/Cart';
import Login from '~/pages/Cart';
import Signin from '~/pages/Cart';

//Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/produce', component: Produce },
  { path: '/cart', component: Cart },
  { path: '/login', component: Login },
  { path: '/signin', component: Signin },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
