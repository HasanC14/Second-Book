import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/AuthProvider";

const SocialLogin = () => {
  const { LoginWithGoogle, LoginWithGitHub } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const SocialLogin = (user) => {
    fetch("https://server-ten-theta.vercel.app/addUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        navigate(from, { replace: true });
        swal({
          icon: "success",
          title: "Login Successful",
          button: "OK",
        });
      });
  };
  const HandleGoogle = () => {
    LoginWithGoogle()
      .then((data) => {
        navigate(from, { replace: true });
        setError("");
        const user = {
          Username: data.user.displayName,
          email: data.user.email,
          role: "buyer",
        };
        SocialLogin(user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const HandleGitHub = () => {
    LoginWithGitHub()
      .then((data) => {
        navigate(from, { replace: true });
        setError("");
        const user = {
          Username: data.user.displayName,
          email: data.user.email,
          role: "buyer",
        };
        SocialLogin(user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div>
      <div className="mb-5">
        <Link
          className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg w-full flex justify-center items-center"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
          onClick={HandleGoogle}
        >
          <FaGoogle className="text-2xl mr-5"></FaGoogle>
          Continue with Google
        </Link>
      </div>
      <div>
        <Link
          className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
          onClick={HandleGitHub}
        >
          <FaGithub className="text-2xl mr-5"></FaGithub>
          Continue with GitHub
        </Link>
      </div>
      <p className="text-red-600 text-center text-xl">{error}</p>
    </div>
  );
};

export default SocialLogin;
