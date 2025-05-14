import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Pages/Home.jsx";
import AllVisas from "../Components/Pages/AllVisas.jsx";
import AddVisa from "../Components/Pages/AddVisa.jsx";
import MyAddedVisas from "../Components/Pages/MyAddedVisas.jsx";
import VisaDetails from "../Components/Pages/VisaDetails.jsx";
import MyVisaApplications from "../Components/Pages/MyVisaApplications.jsx";
import Login from "../Components/Pages/Login.jsx";
import Register from "../Components/Pages/Register.jsx";
import ErrorPage from "../Components/Pages/ErrorPage.jsx";
import Layout from "../Components/Layout.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import ContactUs from "../Components/Pages/ContactUs.jsx";
import Tourist from "../Components/Pages/Tourist.jsx";
import Student from "../Components/Pages/Student.jsx";
import Work from "../Components/Pages/Work.jsx";
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
        path: "/details/:id",
        element: <VisaDetails />,
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
        path: "/my-added-visas/:uid",
        element: <PrivateRoutes>
            <MyAddedVisas />
        </PrivateRoutes>
        ,
      },
      {
        path: "/my-visa-applications/:uid",
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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/tourist-visa",
        element: <Tourist />,
      },
      {
        path: "/student-visa",
        element: <Student />,
      },
      {
        path: "/Work-visa",
        element: <Work />,
      },
    ],
    
  },{
    path:"*",
    element:<ErrorPage/>
  }
]);

export default Routes;
