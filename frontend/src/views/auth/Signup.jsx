import React from "react";
import Image from "../../assets/img/auth/password-amico.svg";
import { Link ,useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";

function Signup() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/api/user", data);
      // console.log(response.data.message);

      if (response.data.message === "You are registered successfully !!") {
        Swal.fire({
          title: response.data.message,
          text: " Go to login page...",
          icon: "success",
        }).then(()=>{
          navigate('/auth/login')
        });
        console.log("successfuly created user!");
      } else {
        Swal.fire({
          title: response.data.message,
          text: "click button to go back!!",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("Error : ", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className="dakr:bg-navy-900  dark:text-white md:flex">
        <div className=" relative order-2  p-10 md:w-1/2 md:p-0">
          <div className="fixed mt-1 cursor-pointer text-gray-500 md:mt-3  md:ms-3">
            <Link to="/home/home">
              <p className="flex gap-3">
                {" "}
                <span className="mt-1">
                  <IoArrowBack />
                </span>{" "}
                Back to Home page
              </p>
            </Link>
          </div>
          <img src={Image} alt="img" />
        </div>
        <div className="order-1 md:order-2 md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="m-5 grid gap-4 p-5 text-gray-700 shadow-md md:m-20 md:p-10 ">
              <div className="flex justify-center text-lg font-bold">
                <h2>Signup</h2>
              </div>
              <div className="grid gap-2 text-lg font-bold">
                <label htmlFor="fullname"> Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className=" h-10 rounded border-2 border-blue-300 px-3 py-1 shadow-md outline-blue-500"
                  {...register(
                    "fullname",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "Fullname is required!",
                      },
                      pattern: {
                        value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
                        message: "Invalid name format!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.fullname?.message}
                </p>
              </div>
              <div className="grid gap-2 text-lg font-bold">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  name="email"
                  className="h-10 rounded border-2 border-blue-300 px-3 py-1 shadow-md outline-blue-500"
                  id="email"
                  {...register(
                    "email",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Email address required!",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                        message: "Invalid email!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">{errors.email?.message}</p>
              </div>
              <div className="grid gap-2 text-lg font-bold">
                <label htmlFor="password"> Password</label>
                <input
                  type="password"
                  name="password"
                  className="h-10 rounded border-2 border-blue-300 px-3 py-1 shadow-md outline-blue-500"
                  id="password"
                  {...register(
                    "password",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "Password is required!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.password?.message}
                </p>
              </div>
              <div>
                <p>
                  Already registerd ? "{" "}
                  <Link to="/auth/login">
                    <span className="font-bold text-blue-700 hover:text-blue-500">
                      Login
                    </span>
                  </Link>{" "}
                </p>
              </div>
              <div>
                <button className="rounded-full bg-blue-600 px-4 py-1 font-bold text-white duration-200 ease-in hover:scale-105 hover:bg-blue-500">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
