import { lazy } from "react";
import { Navigate } from 'react-router-dom';
// project import
import Loadable from "./../components/Loadable";
import MinimalLayout from "./../layout/MinimalLayout";

// render - login
const AuthLogin = Loadable(lazy(() => import("./../pages/login")));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "*",
  element: <MinimalLayout />,
  children: [
    {  element: <Navigate to="/login" />, index: true },
    {
      path: "login",
      element: <AuthLogin />,
    },
  ],
};

export default LoginRoutes;
