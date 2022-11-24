import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseAdmin from "../../Pages/RouteAssets/UseAdmin";

const AdminRoute = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = UseAdmin(User?.email);
  let location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
        </div>
      </div>
    );
  }
  if (isAdmin) {
    return children;
  } else {
    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
