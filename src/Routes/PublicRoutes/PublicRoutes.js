import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import AddProduct from "../../Pages/DashboardPages/AddProduct";
import AllBuyers from "../../Pages/DashboardPages/AllBuyers";
import AllSellers from "../../Pages/DashboardPages/AllSellers";
import MyOrders from "../../Pages/DashboardPages/MyOrders";
import MyProducts from "../../Pages/DashboardPages/MyProducts";
import ReportedItems from "../../Pages/DashboardPages/ReportedItems";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Blog", element: <Blog></Blog> },
      {
        path: "/Categories",
        element: <Categories></Categories>,
      },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: "/Dashboard/MyOrders", element: <MyOrders></MyOrders> },
      { path: "/Dashboard/MyProducts", element: <MyProducts></MyProducts> },
      { path: "/Dashboard/AddProduct", element: <AddProduct></AddProduct> },
      { path: "/Dashboard/AllSellers", element: <AllSellers></AllSellers> },
      { path: "/Dashboard/AllBuyers", element: <AllBuyers></AllBuyers> },
      {
        path: "/Dashboard/ReportedItems",
        element: <ReportedItems></ReportedItems>,
      },
    ],
  },
]);
export default router;
