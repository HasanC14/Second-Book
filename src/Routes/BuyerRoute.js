import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseBuyer from "../../Pages/RouteAssets/UseBuyer";
import Loading from "../Pages/Shared/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = UseBuyer(User?.email);
  let location = useLocation();
  if (loading || isBuyerLoading) {
    return <Loading></Loading>;
  }
  if (isBuyer) {
    return children;
  } else {
    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
  }
};

export default BuyerRoute;
