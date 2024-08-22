// import { DevTool } from "@hookform/devtools";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

function Developers() {
  const form = useForm();
  const { register, handleSubmit, formState,/*control */} = form;
  const { errors } = formState;
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post( "http://localhost:4000/api/developer",data);

    console.log(response.data.message);
    Swal.fire({
      title: response.data.message,
      text:"Thank you !!",
      icon:"success"

    })

    console.log(data);
    setSubmittedData(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Developer already registered !!",
        text : "Thank you !!",
        icon: "error"
      })
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Developers Information */}
          <div>
            <h4 className="my-5 ml-1 text-2xl font-bold text-navy-800 ms-20 dark:text-white">
              Developers Information
            </h4>
          </div>
          <div className="text-md  mx-8 font-medium text-navy-700 dark:text-white md:mx-20 md:flex md:gap-32  ">
            {/* col-1 */}
            <div className="flex flex-col gap-8 md:w-1/2  ">
              {/* developer name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullname">Fullname</label>
                <input
                  type="text"
                  id="fullname"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "fullname",
                    // validation
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

                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.fullname?.message}
                </p>
              </div>

              {/* Developer department */}
              <div className="flex flex-col gap-2">
                <label htmlFor="department"> Department </label>
                <input
                  type="text"
                  id="department"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"

                  {...register(
                    "department",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
                        message: "Invalid format!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.department?.message}
                </p>
              </div>

              {/* Developer contact detail */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact_no"> Contact No.</label>
                <input
                  type="text"
                  id="contact_no"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"

                  {...register(
                    "contact_no",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^((\+91|0091)|0)?[6789]\d{9}$/,
                        message: "Invalid phone number format!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.contact_no?.message}
                </p>
              </div>

              {/* Developer experience  */}

              <div className="flex flex-col gap-2">
                <label htmlFor="experience"> Experience (in year) </label>
                <input
                  type="text"
                  id="experience"
                  placeholder="In years"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"

                  {...register(
                    "experience",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^(?:\d+|(?:\d+\.(?:0|1|2|3|4|5|6|7|8|9|10|11)))$/,
                        message: "Invalid format!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.experience?.message}
                </p>
              </div>

              {/* Domain Name */}
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
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^(?=.{1,253}$)((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/,
                        message: "Invalid Domain name!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">{errors.domain?.message}</p>
              </div>
            </div>
            {/* col-2 */}
            <div className="flex flex-col gap-8 md:w-1/2  ">
              {/* Developer designation  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  id="designation"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "designation",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^[A-Za-z]+([ '-][A-Za-z]+)*$/,
                        message: "Invalid format!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.designation?.message}
                </p>
              </div>

              {/* Developer Address  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address </label>
                <input
                  type="text"
                  id="address"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "address",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.address?.message}
                </p>
              </div>

              {/* Developer Email Address  */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  id="email"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "email",
                    // validation
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
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.Email?.message}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="technology"> Technology</label>
                <input
                  type="text"
                  id="technology"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "technology",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.technology?.message}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ipaddress">IP Address</label>
                <input
                  type="text"
                  id="ipaddress"
                  className="rounded-md border border-navy-700 px-3 py-1 text-navy-700  outline-none dark:bg-navy-700 dark:border-white dark:text-white"
                  {...register(
                    "ipaddress",
                    // validation
                    {
                      required: {
                        value: true,
                        message: "This field can't be empty!!",
                      },
                      pattern: {
                        value: /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/,
                        message: "Invalid ip address!!",
                      },
                    }
                  )}
                />
                {/* error message printing */}
                <p className="text-sm text-red-500">
                  {errors.ipaddress?.message}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 ms-20">
            <button className="text-md rounded-md border hover:scale-105 duration-200 ease-in-out bg-blue-600 px-3 py-1 font-medium text-white outline-none hover:bg-blue-500">
              Submit
            </button>
          </div>
        </form>
        {/* <DevTool control={control} /> for developer convenience */}
        <hr className="mx-10 mt-10 h-0.5 bg-navy-700" />
        {submittedData && (
          <div className="mx-10 mt-10 text-navy-700 dark:text-white">
            <h4 className="mb-4 text-2xl font-bold">Developer </h4>
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

export default Developers;
