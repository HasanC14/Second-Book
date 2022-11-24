import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useContext(AuthContext);

  let location = useLocation();
  if (loading) {
    return (
      <div>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
        </div>
      </div>
    );
  }
  if (!User) {
    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
