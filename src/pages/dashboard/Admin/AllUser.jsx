import React from "react";
import useUser from "../../../Hooks/useUser";
import axios from "axios";
import Swal from "sweetalert2";

const AllUser = () => {
  const [userData, refetch] = useUser();

  const handelMakeAdmin = (id) => {
    axios.patch(`http://localhost:4000/admin/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Admin maked Successfully",
          icon: "success",
            draggable: false,
        });
        refetch()
      }
    });
  };


  const handelDelete = (id) => {
    axios.delete(`http://localhost:4000/admin/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "User deleted Successfully",
          icon: "success",
            draggable: false,
        });
        refetch()
      }
    });
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
            <th className="w-[50px] px-6 py-4 text-start ">
              <input
                type="checkbox"
                id="myCheckbox"
                className="flex h-6 w-6 items-center rounded-full  border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
              />
            </th>
            <th className="px-6 py-4 text-start">User</th>
            <th className="px-6 py-4 text-start">Status</th>
            <th className="px-6 py-4 text-start">Details</th>
            <th className="px-6 py-4 text-start">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {userData.map((item) => (
            <tr
              key={item._id}
              className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]"
            >
              <th className="px-6 py-4 text-start">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="flex h-6 w-6  items-center rounded-full border-2 border-red-500 bg-red-500 text-red-500 focus:border-red-400 focus:ring-red-400"
                />
              </th>
              <th className="px-6 py-4 text-start">
                <img
                  className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                  src="https://source.unsplash.com/300x300/?profile"
                />
              </th>
              <th className="px-6 py-4 text-start ">{item.name || "N/A"}</th>
              <th className="px-6 py-4 text-start">
                <button
                  onClick={() => handelMakeAdmin(item._id)}
                  className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />{" "}
                  </svg>
                  {item.role === 'admin' ? 'Admin' : 'Make Admin'}
                </button>
              </th>
              <th className="px-6 py-4 text-start">
                <button onClick={() => handelDelete(item._id)} className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />{" "}
                  </svg>
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
