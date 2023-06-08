import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import CreateAppointment from "../Pages/CreateAppointment";
import ActiveAppointment from "../Pages/ActiveAppointment";
import AuthWrapper from "../components/AuthWrapper";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

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
          { path: "/createappointment", element: <CreateAppointment /> },
          { path: "/activeappointment", element: <ActiveAppointment /> },
        ],
      },
    ],
  },
]);

export default routes;
