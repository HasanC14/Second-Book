import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseSeller from "../../Pages/RouteAssets/UseSeller";
import Loading from "../Pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = UseSeller(User?.email);
  let location = useLocation();
  if (loading || isSellerLoading) {
    return <Loading></Loading>;
  }
  if (isSeller) {
    return children;
  } else {
    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
  }
};

export default SellerRoute;
