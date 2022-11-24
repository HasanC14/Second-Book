import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";
import RegisterImg from "../../Image/Register.jpg";
const Register = () => {
  const { Register, UpdateUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const user = {
      Username,
      email,
      role,
    };
    console.log(user);

    Register(email, password)
      .then(() => {
        swal({
          icon: "success",
          title: "Successfully Registered",
          button: "OK",
        });
        form.reset();
        setError("");
        navigate("/");
        const profile = { displayName: Username, photoURL: photoURL };
        UpdateUser(profile)
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={RegisterImg} class="w-full" alt="Phone_image" />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={HandleForm}>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                    name="username"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Photo URL"
                    name="photoURL"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div class="flex justify-start mb-3">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="role"
                      id="inlineRadio1"
                      value="buyer"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineRadio10"
                    >
                      Buyer
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="role"
                      id="inlineRadio2"
                      value="seller"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineRadio20"
                    >
                      Seller
                    </label>
                  </div>
                </div>
                <div class="mb-6">
                  Already have an account
                  <Link
                    to="/Login"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 ml-2"
                  >
                    Sign In
                  </Link>
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-full"
                >
                  Sign Up
                </button>
                <p className="text-red-600 text-center text-xl">{error}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
