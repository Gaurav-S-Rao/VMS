import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

function AuthWrapper() {
  const auth = useAuth();

  if (auth?.userId) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AuthWrapper;
