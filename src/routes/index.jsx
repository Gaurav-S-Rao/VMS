import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import CreateAppointment from "../components/CreateAppointment";
import ActiveAppointment from "../components/ActiveAppointment";
import AuthWrapper from "../components/AuthWrapper";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import Dashboard from "../components/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      {
        element: <AuthWrapper />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "/dashboard/createappointment",
                element: <CreateAppointment />,
              },
              {
                path: "/dashboard/activeappointment",
                element: <ActiveAppointment />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default routes;
