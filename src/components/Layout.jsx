import { Outlet } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";
import Notification from "./Notification";
import useHandleRedirect from "../hooks/useHandleRedirect";

function Layout() {
  useHandleRedirect();
  return (
    <>
      <Header />
      <Notification />
      <Outlet />
    </>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
