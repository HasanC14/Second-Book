import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import UseAdmin from "../Pages/RouteAssets/UseAdmin";
import UseBuyer from "../Pages/RouteAssets/UseBuyer";
import UseSeller from "../Pages/RouteAssets/UseSeller";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { User } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(User?.email);
  const [isSeller] = UseSeller(User?.email);
  const [isBuyer] = UseBuyer(User?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <li>
                <Link to={"/Dashboard/MyOrders"}>My Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to={"/Dashboard/MyProducts"}>My Products</Link>
                </li>
                <li>
                  <Link to={"/Dashboard/AddProduct"}>Add A Product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to={"/Dashboard/AllSellers"}>All Sellers</Link>
                </li>
                <li>
                  <Link to={"/Dashboard/AllBuyers"}>All Buyers</Link>
                </li>
                <li>
                  <Link to={"/Dashboard/ReportedItems"}>Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
