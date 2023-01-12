import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project import
import Loadable from './../components/Loadable';
import MainLayout from './../layout/MainLayout';

// render - dashboard
const Dashboard = Loadable(lazy(() => import('./../pages/dashboard')));
const Sale = Loadable(lazy(() => import('./../pages/sale')));
const Product = Loadable(lazy(() => import('./../pages/product')));
const Bill = Loadable(lazy(() => import('./../pages/bill')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'sale', element: <Sale /> },
        { path: 'product', element: <Product /> },
        { path: 'bill', element: <Bill /> },
    ]
};

export default MainRoutes;
