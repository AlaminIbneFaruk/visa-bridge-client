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
import Admin from "../Components/Pages/Admin.jsx";
import Users from "../Components/Pages/Users.jsx";
import Guides from "../Components/Pages/Guides.jsx";
import Packages from "../Components/Pages/Packages.jsx";
import Analytics from "../Components/Pages/Analytics.jsx";
import Applications from "../Components/Pages/Applications.jsx";
import AdminHome from "../Components/Pages/AdminHome.jsx";
import DashboardHome from "../Components/Pages/DashboardHome.jsx";
import DashboardBookings from "../Components/Pages/DashboardBookings.jsx";
import DashboardProfile from "../Components/Pages/DashboardProfile.jsx";
import DashboardComments from "../Components/Pages/DashboardComments.jsx";

import DashboardLayout from "../Components/DashboardLayout.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "details/:id", element: <VisaDetails /> },
      { path: "all-visas", element: <AllVisas /> },
      {
        path: "add-visa",
        element: (
          <PrivateRoutes>
            <AddVisa />
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <DashboardLayout />
          </PrivateRoutes>
        ),
        children: [
          { path: "", element: <DashboardHome /> },
          { path: "bookings", element: <DashboardBookings /> },
          { path: "profile", element: <DashboardProfile /> },
          { path: "comments", element: <DashboardComments /> },
        ],
      },
      {
        path: "my-added-visas/:uid",
        element: (
          <PrivateRoutes>
            <MyAddedVisas />
          </PrivateRoutes>
        ),
      },
      {
        path: "admin",
        element: (
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        ),
        children: [
          { path: "", element: <AdminHome /> },        // Admin landing page
          { path: "users", element: <Users /> },
          { path: "guides", element: <Guides /> },
          { path: "packages", element: <Packages /> },
          { path: "analytics", element: <Analytics /> },
          { path: "applications", element: <Applications /> },
        ],
      },
      {
        path: "my-visa-applications/:uid",
        element: (
          <PrivateRoutes>
            <MyVisaApplications />
          </PrivateRoutes>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "tourist-visa", element: <Tourist /> },
      { path: "student-visa", element: <Student /> },
      { path: "work-visa", element: <Work /> }, // lowercase consistent path
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Routes;
