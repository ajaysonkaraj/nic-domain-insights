import React from "react";

function CheckTable() {
  return (
    <>
      <div className="m-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4">
            <label className="input mx-[10%] flex h-10 items-center rounded-[30px] shadow-sm md:mx-0">
              <input
                type="text"
                className="grow  font-bold text-blue-700"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 cursor-pointer opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className=" ">
            <button className=" mt-1 rounded-md bg-blue-700 px-3 py-1 font-bold text-white duration-200 ease-in hover:scale-105 hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>

        <div className="mt-10 grid  gap-4 md:grid-cols-2 ">
          <div className=" gap-4  rounded-lg bg-white shadow-xl">
            <div className="  overflow-x-auto py-4 px-4 text-navy-700">
              <caption className="font-bold text-xl flex justify-center mb-5">Domain</caption>
              <table className="table-sm table">
                <tbody>
                  <tr>
                    <td>Domain</td>
                    <td>nic.com</td>
                  </tr>
                  <tr>
                    <td>IP Address</td>
                    <td>1.1.1.1</td>
                  </tr>
                  <tr>
                    <td>Registration Date</td>
                    <td>dd/mm/yyy</td>
                  </tr>
                  <tr>
                    <td>Expiry Date</td>
                    <td>dd/mm/yyy</td>
                  </tr>
                  <tr>
                    <td>Updated on</td>
                    <td>dd/mm/yyy</td>
                  </tr>
                  <tr>
                    <td>Registrar</td>
                    <td>nic</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>GAD</td>
                  </tr>
                  <tr>
                    <td>Time Taken</td>
                    <td>68 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid"></div>
          </div>
          <div className="bg-white rounded-lg shadow-xl  ">
          

            <div className="  overflow-x-auto py-4 px-4 text-navy-700">
              <table className="table-sm table">
                <tbody>
                  <tr>
                    <td>Manager</td>
                    <td>Shree Ashok maurya</td>
                  </tr>
                  <tr>
                    <td>Degignation</td>
                    <td>Scientist F</td>
                  </tr>
                  <tr>
                    <td>Department </td>
                    <td>General Administrativ Department</td>
                  </tr>
                  <tr>
                    <td>Contact No. </td>
                    <td>8521479630</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>example@gmai.com</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>Mahanadi bhawan ground floor room no. AD0-39 nawa Raipur CG</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl h-screen mt-10">

        </div>
      </div>
    </>
  );
}

export default CheckTable;
