import React, { useState } from "react";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import Swal from "sweetalert2";

function Dashboard() {
  const [data, setData] = useState(null);
  const [domainName, setDomainName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDeveloper, setEditedDeveloper] = useState(null);

  const handleSearch = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:4000/api/dashboard/${domainName}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
          console.error("There was an error fetching the data!", error);
          setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    setDomainName(e.target.value);
  };

// More Button option for show more details of any developer
  const handleMoreClick = (developer) => {
    setSelectedDeveloper(developer);
    setEditedDeveloper(developer);
    document.getElementById("moreDetail").showModal();
  };

  // Edit Button option for edit developer details
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedDeveloper((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save the edited Developer details
  const handleSave = () => {
    axios
      .put(
        `http://localhost:4000/api/developer/${editedDeveloper.id}`,
        editedDeveloper
      )
      .then((response) => {
        setData((prev) => {
          const updatedDevelopers = prev.data.developer.map((dev) =>
            dev.id === editedDeveloper.id ? editedDeveloper : dev
          );
          return {
            ...prev,
            data: {
              ...prev.data,
              developer: updatedDevelopers,
            },
          };
        });
        Swal.fire({
          // title:error.response?.message || error.message,
          title: "successfully updated",
          text: "Click button to go back",
          icon: "success",
        });
        setIsEditing(false);
        document.getElementById("moreDetail").close();
      })
      .catch((error) => {
        console.error("There was an error updating the data!", error);
        Swal.fire({
          title: error.response?.message || error.message,
          text: "Click button to go back",
          icon: "success",
        });
      });
  };



// Delete developer 

const handleDelete = (developerId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#00f",  //3085d6
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`http://localhost:4000/api/developer/${developerId}`)
        .then((response) => {
          setData((prev) => {
            const updatedDevelopers = prev.data.developer.filter(
              (dev) => dev.id !== developerId
            );
            return {
              ...prev,
              data: {
                ...prev.data,
                developer: updatedDevelopers,
              },
            };
          });
          Swal.fire(
            "Deleted!",
            "Developer has been deleted.",
            "success"
          );
        })
        .catch((error) => {
          console.error("There was an error deleting the data!", error);
          Swal.fire(
            "Error!",
            "There was an error deleting the developer.",
            "error"
          );
        });
    }
  });
};



  // Render domain manager and developer details based on filtered data
  const renderData = () => {
    if (!data || !data.data) return null;

    // Find the domain manager for the specified domain
    const filteredDomainManager = data.data.domainManager.find(
      (dm) => dm.domain === domainName
    );

    // Find all developers for the specified domain
    const filteredDevelopers = data.data.developer.filter(
      (dev) => dev.domain === domainName
    );

    if (!filteredDomainManager) {
      // If no domain manager is found, return a message or handle as needed
      return (
        <div className="mt-3 text-sm text-blueSecondary">
          There is no record for { " "}
          <span className="text-red-600">{domainName}</span>
        </div>
      );
    }

    return (
      <>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="gap-4 rounded-lg bg-white shadow-lg dark:bg-navy-700 dark:text-white">
            <div className="my-5 flex justify-center text-xl font-bold">
              Domain
            </div>
            <div className="overflow-x-auto py-4 px-4 text-navy-700 dark:text-white">
              <table className="table-sm table">
                <tbody>
                  <tr>
                    <td>Domain</td>
                    <td>{filteredDomainManager.domain}</td>
                  </tr>
                  <tr>
                    <td>IP Address</td>
                    <td>{filteredDomainManager.ipaddress}</td>
                  </tr>
                  <tr>
                    <td>Registration Date</td>
                    <td>
                      {new Date(
                        filteredDomainManager.registrationdate
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Expiry Date</td>
                    <td>
                      {new Date(
                        filteredDomainManager.expirydate
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Updated on</td>
                    <td>
                      {new Date(
                        filteredDomainManager.updateddate
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Registrar</td>
                    <td>{filteredDomainManager.registrar}</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>{filteredDomainManager.department}</td>
                  </tr>
                  <tr>
                    <td>Time Taken</td>
                    <td>{filteredDomainManager.takentime} Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-xl dark:bg-navy-700 dark:text-white">
            <div className="my-5 flex justify-center text-xl font-bold">
              Manager
            </div>
            <div className="overflow-x-auto rounded-lg py-4 px-4 text-navy-700 dark:bg-navy-700 dark:text-white">
              <table className="table-sm table">
                <tbody>
                  <tr>
                    <td>Manager</td>
                    <td>{filteredDomainManager.fullname}</td>
                  </tr>
                  <tr>
                    <td>Designation</td>
                    <td>{filteredDomainManager.designation}</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>{filteredDomainManager.manager_department}</td>
                  </tr>
                  <tr>
                    <td>Contact No.</td>
                    <td>{filteredDomainManager.contact_no}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{filteredDomainManager.email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{filteredDomainManager.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-10 truncate rounded-lg bg-white shadow-xl dark:bg-navy-700 dark:text-white">
          <div className="flex justify-center">
            <span className="mt-5 text-2xl font-bold ">Developers</span>
          </div>
          <div className="p-4">
            <table className="table-sm w-full table-auto ">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Contact No.</th>
                  <th>Address</th>
                  <th>Technology</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredDevelopers.map((dev) => (
                  <tr key={dev.id}>
                    <td>{dev.fullname}</td>
                    <td>{dev.email}</td>
                    <td>{dev.contact_no}</td>
                    <td>{dev.address}</td>
                    <td>{dev.technology}</td>
                    <td className="tooltip" data-tip="More">
                      <button
                        className="text-2xl text-gray-800 duration-200 ease-in-out hover:scale-125 dark:text-white"
                        onClick={() => handleMoreClick(dev)}
                      >
                        <IoIosMore />
                      </button>
                    </td>
                    <td className="tooltip" data-tip="Delete">
                      <button 
                      className="cursor-pointer text-2xl  text-red-500 duration-200 ease-in-out hover:scale-125 hover:text-red-400 "
                      onClick={() => handleDelete(dev.id)}
                      >
                        <MdOutlineDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="m-5 ">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4 ">
            <label className="input mx-[10%] flex h-10 items-center rounded-[30px] shadow-sm dark:border-navy-200 dark:bg-navy-700 md:mx-0">
              <input
                type="text"
                className="grow font-bold text-blue-700"
                placeholder="Search"
                value={domainName}
                onChange={handleInputChange}
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
          <div>
            <button
              className="mt-1 rounded-full bg-blue-700 px-3 py-1 font-bold text-white duration-200 ease-in hover:scale-105 hover:bg-blue-600"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
        {isLoading && <div>Loading...</div>}
        {renderData()}
      </div>

      {selectedDeveloper && (
        <dialog id="moreDetail" className="modal">
          <div className="modal-box w-full dark:bg-navy-700 dark:text-white">
            <h3 className="text-lg font-bold">Developer Details</h3>
            {isEditing ? (
              <>
                <table className="table-sm table ">
                  <thead>
                    <tr className="text-cen dark:text-white">
                      <td>Full Name</td>
                      <td>Email</td>
                      <td>Contact No.</td>
                      <td>Address</td>
                      <td>Designation</td>
                      <td>Department</td>
                      <td>Experience</td>
                      <td>Technology</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="fullname"
                          value={editedDeveloper.fullname}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="email"
                          value={editedDeveloper.email}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="contact_no"
                          value={editedDeveloper.contact_no}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="address"
                          value={editedDeveloper.address}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="designation"
                          value={editedDeveloper.designation}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="department"
                          value={editedDeveloper.department}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="experience"
                          value={editedDeveloper.experience}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="technology"
                          value={editedDeveloper.technology}
                          onChange={handleEditChange}
                          className="rounded-md bg-lightPrimary py-1 px-3 outline-none dark:bg-navy-800 dark:text-white"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="modal-action">
                  <button
                    className="rounded-full bg-blueSecondary py-1 px-4 font-bold text-white duration-200 ease-in-out hover:scale-105 hover:bg-blue-500 "
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="rounded-full bg-blueSecondary py-1 px-4 font-bold text-white duration-200 ease-in-out hover:scale-105 hover:bg-blue-500 "
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <table className="table-sm table">
                  <thead>
                    <tr className="text-center dark:text-white">
                      <td>Full Name</td>
                      <td>Email</td>
                      <td>Contact No.</td>
                      <td>Address</td>
                      <td>Designation</td>
                      <td>Department</td>
                      <td>Experience</td>
                      <td>Technology</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedDeveloper.fullname}</td>
                      <td>{selectedDeveloper.email}</td>
                      <td>{selectedDeveloper.contact_no}</td>
                      <td>{selectedDeveloper.address}</td>
                      <td>{selectedDeveloper.designation}</td>
                      <td>{selectedDeveloper.department}</td>
                      <td>{selectedDeveloper.experience}</td>
                      <td>{selectedDeveloper.technology}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="modal-action">
                  <button
                    className="rounded-full bg-blueSecondary py-1 px-4 font-bold text-white duration-200 ease-in-out hover:scale-105 hover:bg-blue-500 "
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-full bg-blueSecondary py-1 px-4 font-bold text-white duration-200 ease-in-out hover:scale-105 hover:bg-blue-500 "
                    onClick={() =>
                      document.getElementById("moreDetail").close()
                    }
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}

export default Dashboard;
