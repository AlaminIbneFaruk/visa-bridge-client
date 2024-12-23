import { createBrowserRouter } from "react-router-dom";

import Home from "../Components/Home.jsx";
import AllVisas from "../Components/AllVisas.jsx";
import AddVisa from "../Components/AddVisa.jsx";
import MyAddedVisas from "../Components/MyAddedVisas.jsx";
import MyVisaApplications from "../Components/MyVisaApplications.jsx";
import Login from "../Components/Login.jsx";
import Register from "../Components/Register.jsx";
import ErrorPage from "../Components/ErrorPage.jsx";
import App from "../App.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: (
            <AddVisa />
        ),
      },
      {
        path: "/my-added-visas",
        element: (
            <MyAddedVisas />
        ),
      },
      {
        path: "/my-visa-applications",
        element: (
            <MyVisaApplications />
        ),
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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Routes;
