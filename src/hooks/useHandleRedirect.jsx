import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useHandleRedirect() {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.userId) {
      if (authState.userRole === "host") {
        navigate("/dashboard?type=host");
      } else if (authState.userRole === "visitor") {
        navigate("/dashboard?type=visitor");
      } else if (authState.userRole === "security") {
        navigate("/dashboard?type=security");
      }
    }
  }, [authState]);
}
