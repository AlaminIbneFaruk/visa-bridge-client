import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Pages/Home.jsx";
import AllVisas from "../Components/Pages/AllVisas.jsx";
import AddVisa from "../Components/Pages/AddVisa.jsx";
import MyAddedVisas from "../Components/Pages/MyAddedVisas.jsx";
import MyVisaApplications from "../Components/Pages/MyVisaApplications.jsx";
import Login from "../Components/Pages/Login.jsx";
import Register from "../Components/Pages/Register.jsx";
import ErrorPage from "../Components/Pages/ErrorPage.jsx";
import Layout from "../Components/Layout.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-visas",
        element: <AllVisas />,
      },
      {
        path: "/add-visa",
        element: <PrivateRoutes>

          <AddVisa />
        </PrivateRoutes>
        ,
      },
      {
        path: "/my-added-visas",
        element: <PrivateRoutes>
            <MyAddedVisas />
        </PrivateRoutes>
        ,
      },
      {
        path: "/my-visa-applications",
        element: <PrivateRoutes>
            <MyVisaApplications />
        </PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
    
  },{
    path:"*",
    element:<ErrorPage/>
  }
]);

export default Routes;
