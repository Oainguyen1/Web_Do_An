import Home from '~/pages/Home';
import Boy from '~/pages/Produce/Boy';
import Girl from '~/pages/Produce/Girl';
import Children from '~/pages/Produce/Children';
import Cart from '~/pages/Cart';
import Login from '~/pages/Account/Login';
import Signin from '~/pages/Account/Signin';
import About from '~/pages/About';
import Blog from '~/pages/Blog';
import SaleUp from '~/pages/Produce/SaleUp';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/boy', component: Boy },
    { path: '/girl', component: Girl },
    { path: '/children', component: Children },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/signin', component: Signin },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/saleup', component: SaleUp },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
