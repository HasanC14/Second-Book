import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";

const SocialLogin = () => {
  const { LoginWithGoogle, LoginWithGitHub } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const HandleGoogle = () => {
    LoginWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
        swal({
          title: "Login Successful",
          button: "OK",
        });
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  };
  const HandleGitHub = () => {
    LoginWithGitHub()
      .then(() => {
        navigate(from, { replace: true });
        swal({
          title: "Login Successful",
          button: "OK",
        });
        setError("");
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
    </div>
  );
};

export default SocialLogin;
