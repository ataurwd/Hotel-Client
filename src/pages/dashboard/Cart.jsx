import React from "react";
import useCart from "../../Hooks/useCart";
import axios from "axios";
import Swal from 'sweetalert2'

const Cart = () => {
  const [cart, refetch] = useCart();

  const handelDelete = (id) => {
    axios.delete(`http://localhost:4000/cart/${id}`)
      .then(res => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            if (res.data.deletedCount > 0) {
              refetch();
            }
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white shadow-lg">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
            <th className="w-[50px] px-6 py-4 text-start ">
                No
            </th>
            <th className="px-6 py-4 text-start">User</th>
            <th className="px-6 py-4 text-start">Status</th>
            <th className="px-6 py-4 text-start">Details</th>
            <th className="px-6 py-4 text-start">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {cart.map((item, index) => (
            <tr key={item._id} className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]">
              <th className="px-6 py-4 text-start">
                {index +1}
              </th>
              <th className="px-6 py-4 text-start">
                <img
                  className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                  src={item.img}
                />
              </th>
                  <th className="px-6 py-4 text-start ">{ item.name}</th>
              <th className="px-6 py-4 text-start">
                <button className="flex items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700">
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
                  Details
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

export default Cart;
