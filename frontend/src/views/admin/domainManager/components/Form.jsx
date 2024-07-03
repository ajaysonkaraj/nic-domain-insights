import { React, useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

function Form() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/domain-manager",
        data
      );
      console.log(response.data.message);
      Swal.fire({
        title: response.data.message,
        text: "Thank you !!",
        icon:"success"
      });
      console.log(data)
      setSubmittedData(data);

      console.log("Developer added !!");

    } catch (error) {
      console.log("Error : ", error.response?.message );
      Swal.fire({
        title: "Domain registered already!!",
        text:"Thank you",
        icon: "error"
      })
      
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h4 className="ml-1 mb-5 text-2xl font-bold text-navy-800 ms-20 dark:text-white">
              Domain Information
            </h4>
          </div>
          <div className="text-md  mx-8 font-medium text-navy-700 dark:text-white md:mx-20 md:flex md:gap-32  ">
            <div className="flex flex-col gap-8 md:w-1/2  ">
              {/* Domain name input field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="domain">Domain Name</label>
                <input
                  type="text"
                  id="domain"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "domain",

                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty",
                      },
                      pattern: {
                        value:
                          /^(?=.{1,253}$)((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/,
                        message: "Invalid domain format!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">{errors.domain?.message}</p>
              </div>

              {/* Registration Date input field  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="registrationdate">Registration Date </label>
                <input
                  type="datetime-local"
                  id="registrationdate"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "registrationdate",
                    //validation
                    // {
                    //   required: {
                    //     value: true,
                    //     message: "Select registration date ",
                    //   },
                    // }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.registrationdate?.message}
                </p>
              </div>
              {/* Last Updated date   */}
              <div className="flex flex-col gap-2">
                <label htmlFor="updateddate">Updated On</label>
                <input
                  type="datetime-local"
                  id="updateddate"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "updateddate",
                    //validation
                    // {
                    //   required: {
                    //     value: true,
                    //     message: "Select last updated date ",
                    //   },
                    // }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.updateddate?.message}
                </p>
              </div>
              {/* Input field for Taken time to develop web-application */}
              <div className="flex flex-col gap-2">
                <label htmlFor="takentime">Time taken to developed</label>
                <input
                  type="number"
                  id="takentime"
                  placeholder="In days"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "takentime",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Enter time taken (in days) ",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.takentime?.message}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-8 md:mt-0 md:w-1/2">
              {/* Input field for IP Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="ipaddress">IP Address</label>
                <input
                  type="text"
                  id="ipaddress"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "ipaddress",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Enter IP address ",
                      },
                      pattern: {
                        value:
                          /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/,
                        message: "Invalid IP address!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.ipaddress?.message}
                </p>
              </div>

              {/* Input field for when will domain expire */}

              <div className="flex flex-col gap-2">
                <label htmlFor="expirydate">Expires On</label>
                <input
                  type="datetime-local"
                  id="expirydate"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "expirydate",
                    //validation
                    // {
                    //   required: {
                    //     value: true,
                    //     message: "Select expiry date ",
                    //   },
                    // }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.expirydate?.message}
                </p>
              </div>
              {/* Registrar input field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="registrar">Registrar</label>
                <input
                  type="text"
                  id="registrar"
                  defaultValue="National Informatics Centre"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "registrar",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
                        message: "Invalid name format!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.registrar?.message}
                </p>
              </div>

              {/* Department input field  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "department",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
                        message: "Invalid name format!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.department?.message}
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------ */}
          <hr className="mx-20 mt-10 h-0.5 bg-navy-700" />

          {/* Manager details */}

          <div>
            <h4 className="my-5 ml-1 text-2xl font-bold text-navy-800 ms-20 dark:text-white">
              Manager Information
            </h4>
          </div>
          <div className="text-md  mx-8 font-medium text-navy-700 dark:text-white md:mx-20 md:flex md:gap-32  ">
            {/* col-1 */}
            <div className="flex flex-col gap-8 md:w-1/2  ">
              {/* input field for manager name  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  id="fullname"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "fullname",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!! ",
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
              {/* input field for manager Department  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="manager_department"> Department </label>
                <input
                  type="text"
                  id="manager_department"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "manager_department",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Enter department of manager!! ",
                      },
                      pattern: {
                        value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
                        message: "Invalid name format!!",
                      },
                    }
                  )}
                />
                <p>{errors.manager_department?.message}</p>
              </div>
              {/* input field for manager Phone number  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact_no"> Contact No.</label>
                <input
                  type="text"
                  id="contact_no"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "contact_no",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Enter phone number!!  ",
                      },
                      pattern: {
                        value: /^((\+91|0091)|0)?[6789]\d{9}$/,
                        message: "Invalid mobile no.",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.contact_no?.message}
                </p>
              </div>
            </div>
            {/* col-2 */}
            <div className="flex flex-col gap-8 md:w-1/2  ">
              {/* input field for manager Designation  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  id="designation"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "designation",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!! ",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.designation?.message}
                </p>
              </div>
              {/* input field for manager Address  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address </label>
                <input
                  type="text"
                  id="address"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "address",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.address?.message}
                </p>
              </div>
              {/* input field for manager Email  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  id="email"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "email",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
                        message: "Invalid email!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.email?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 ms-20">
            <button className="text-md rounded-md border bg-blue-600 px-3 py-1 font-medium hover:scale-105 duration-200 ease-in-out text-white outline-none hover:bg-blue-500">
              Submit
            </button>
          </div>
        </form>
        <hr className="mx-10 mt-10 h-0.5 bg-navy-700" />

        {submittedData && (
          <div className="mx-10 mt-10 text-navy-700 dark:text-white">
            <h4 className="mb-4 text-2xl font-bold">Domain & Manager </h4>
            <div className="w-1/2 overflow-x-auto">
              <table className="table-sm table">
                {/* <thead>
                  <tr>
                    <th className="dark:text-white">Field</th>
                    <th className="dark:text-white">Value</th>
                  </tr>
                </thead> */}
                <tbody>
                  {Object.entries(submittedData).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
