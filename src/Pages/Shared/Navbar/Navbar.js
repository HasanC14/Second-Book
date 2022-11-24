import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";
import logo from "../../../Image/book.png";
const Navbar = () => {
  const { User, LogOut } = useContext(AuthContext);
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        swal({
          title: "Logout Successful",
          button: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const MenuItems = (
    <React.Fragment>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/Blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/Dashboard"}>Dashboard</Link>
      </li>
      {User ? (
        <>
          <li>
            <button onClick={HandleLogout}>Logout</button>
          </li>
          <div className="grid grid-cols-2 items-center">
            {User?.photoURL ? (
              <img src={User?.photoURL} className="w-10 rounded-full" alt="" />
            ) : (
              <FaUserCircle className="text-4xl"></FaUserCircle>
            )}
            <p className="font-black">{User?.displayName}</p>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
          <li>
            <Link to={"/Register"}>Register</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="bg-base-300">
      <div className="navbar  max-w-screen-xl mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="w-10" alt="" />
            <span className="font-black text-2xl mr-1">SECOND</span>
            Book
          </Link>
        </div>
        <div className="flex-none md:block hidden">
          <ul className="menu menu-horizontal p-0">{MenuItems}</ul>
        </div>

        <div className="dropdown dropdown-end  block md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {MenuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
