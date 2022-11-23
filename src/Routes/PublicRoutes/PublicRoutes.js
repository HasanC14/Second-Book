import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
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
      { path: "/Categories", element: <Categories></Categories> },
      { path: "/Login", element: <Login></Login> },
      { path: "/Register", element: <Register></Register> },
    ],
  },
]);
export default router;
