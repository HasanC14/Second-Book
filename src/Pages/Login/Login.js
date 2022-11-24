import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import LoginImg from "../../Image/login.jpg";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { Login, LoginWithGoogle, LoginWithGitHub } = useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then(() => {
        navigate(from, { replace: true });
        swal({
          title: "Login Successful",
          button: "OK",
        });
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
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
    <div className="max-w-screen-xl mx-auto">
      <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={LoginImg} class="w-full" alt="Phone_image" />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={HandleForm}>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div class="mb-6">
                  Don't have an account,
                  <Link
                    to="/Register"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 ml-3"
                  >
                    Sign Up
                  </Link>
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-full"
                >
                  Sign in
                </button>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <div className="mb-5">
                  <Link
                    class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg w-full flex justify-center items-center"
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
                    class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                    onClick={HandleGitHub}
                  >
                    <FaGithub className="text-2xl mr-5"></FaGithub>
                    Continue with GitHub
                  </Link>
                </div>
                <p className="text-red-700 text-center text-xl">{error}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
