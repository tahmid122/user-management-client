import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Home = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  console.log(users);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const filteredUser = users.filter((user) => user._id !== id);
              setUsers(filteredUser);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Data deleted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <div className="md:p-10">
      <div className="md:w-8/12 mx-auto p-5 text-base ">
        <Link
          to={"/new-user"}
          className="text-base font-bold hover:text-green-500"
        >
          New User &gt;&gt;
        </Link>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white bg-black text-center">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              {users?.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.status}</td>
                    <td className="flex items-center justify-center gap-3">
                      <Link
                        to={`/update-user/${user._id}`}
                        className="p-2 rounded shadow shadow-gray-300 cursor-pointer hover:bg-green-500 hover:text-white"
                      >
                        <BsPencilSquare size={20} />
                      </Link>
                      <span
                        onClick={() => handleDelete(user._id)}
                        className="p-2 rounded shadow shadow-gray-300 cursor-pointer hover:bg-red-500 hover:text-white"
                      >
                        <FaXmark size={20} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
