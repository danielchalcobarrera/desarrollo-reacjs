import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";

import App from "../App";
const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-reacjs' : '/';

import Bienvenido from '../screens/Forms/Bienvenido';
import FrmObjeto from '../screens/Forms/FrmObjeto';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/bienvenido',
                element: <Bienvenido/>,
            },
            {
                 path: '/frmobjeto',
                 element: <FrmObjeto/>
            },
        ]
    }
],
{
    basename:basename,
});

export default routes;