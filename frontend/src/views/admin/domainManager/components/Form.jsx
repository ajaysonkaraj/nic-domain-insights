import { React, useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
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
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400 "
                  {...register(
                    "domain",

                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty",
                      },
                      pattern:{
                        value: /^(?=.{1,253}$)((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/,
                        message: "Invalid domain format!!",
                      }
                    }
                  )}
                />
                <p className="text-sm text-red-500">{errors.domain?.message}</p>
              </div>

              {/* Registration Date input field  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="registration_Date">Registration Date </label>
                <input
                  type="date"
                  id="registration_Date"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400 "
                  {...register(
                    "registration_Date",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Select registration date ",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.registration_Date?.message}
                </p>
              </div>
              {/* Last Updated date   */}
              <div className="flex flex-col gap-2">
                <label htmlFor="update_Date">Updated On</label>
                <input
                  type="date"
                  id="update_Date"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
                  {...register(
                    "update_Date",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Select last updated date ",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.update_Date?.message}
                </p>
              </div>
              {/* Input field for Taken time to develop web-application */}
              <div className="flex flex-col gap-2">
                <label htmlFor="time_Taken">Time taken to developed</label>
                <input
                  type="number"
                  id="time_Taken"
                  placeholder="In days"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
                  {...register(
                    "time_Taken",
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
                  {errors.time_Taken?.message}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-8 md:mt-0 md:w-1/2">
              {/* Input field for IP Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="ip_Address">IP Address</label>
                <input
                  type="text"
                  id="ip_Address"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
                  {...register(
                    "ip_Address",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Enter IP address ",
                      },
                      pattern:{
                        value: /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/,
                        message: "Invalid IP address!!"
                      }
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.ip_Address?.message}
                </p>
              </div>

              {/* Input field for when will domain expire */}

              <div className="flex flex-col gap-2">
                <label htmlFor="expiry_Date">Expires On</label>
                <input
                  type="date"
                  id="expiry_Date"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
                  {...register(
                    "expiry_Date",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Select expiry date ",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.expiry_Date?.message}
                </p>
              </div>
              {/* Registrar input field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="registrar">Registrar</label>
                <input
                  type="text"
                  id="registrar"
                  defaultValue="National Informatics Centre"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
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
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
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
                <label htmlFor="manager_Name">Fullname</label>
                <input
                  type="text"
                  id="manager_Name"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400 "
                  {...register(
                    "manager_Name",
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
                  {errors.manager_Name?.message}
                </p>
              </div>
              {/* input field for manager Department  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="manager_Department"> Department </label>
                <input
                  type="text"
                  id="manager_Department"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400 "
                  {...register(
                    "manager_Department",
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
                <p>{errors.manager_Department?.message}</p>
              </div>
              {/* input field for manager Phone number  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="manager_ContactNo"> Contact No.</label>
                <input
                  type="text"
                  id="manager_ContactNo"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
                  {...register(
                    "manager_ContactNo",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "Enter phone number!!  ",
                      },
                      pattern:{
                        value: /^((\+91|0091)|0)?[789]\d{9}$/,
                        message: "Invalid mobile no."

                      }
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.manager_ContactNo?.message}
                </p>
              </div>
            </div>
            {/* col-2 */}
            <div className="flex flex-col gap-8 md:w-1/2  ">
              {/* input field for manager Designation  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="manager_Designation">Designation</label>
                <input
                  type="text"
                  id="manager_Designation"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400 "
                  {...register(
                    "manager_Designation",
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
                  {errors.manager_Designation?.message}
                </p>
              </div>
              {/* input field for manager Address  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="manager_Address">Address </label>
                <input
                  type="text"
                  id="manager_Address"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400 "
                  {...register(
                    "manager_Address",
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
                  {errors.manager_Address?.message}
                </p>
              </div>
              {/* input field for manager Email  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="manager_Email"> Email</label>
                <input
                  type="email"
                  id="manager_Email"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-green-400"
                  {...register(
                    "manager_Email",
                    //validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
                        message: "Invalid email!!",
                      },
                    }
                  )}
                />
                <p className="text-sm text-red-500">
                  {errors.manager_Email?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 ms-20">
            <button className="text-md rounded-md border bg-blue-600 px-3 py-1 font-medium text-white outline-none hover:bg-blue-500">
              Submit
            </button>
          </div>
        </form>
        <hr className="mx-10 mt-10 h-0.5 bg-navy-700" />

        {submittedData && (
          <div className="mx-10 mt-10 text-navy-700 dark:text-white">
            <h4 className="mb-4 text-2xl font-bold">Domain & Manager  </h4>
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
