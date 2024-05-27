import Home from '~/pages/Home';
import Boy from '~/pages/Produce/Boy';
import Cart from '~/pages/Cart';
import Login from '~/pages/Account/Login';
import Signin from '~/pages/Account/Signin';
import About from '~/pages/About';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/boy', component: Boy },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/signin', component: Signin },
    { path: '/about', component: About },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
