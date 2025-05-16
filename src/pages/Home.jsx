import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router";

const Home = () => {
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Tahmid</td>
                <td>tahmid@gmail.com</td>
                <td>Male</td>
                <td className="flex items-center justify-center gap-3">
                  <Link
                    to={"/update-user/01"}
                    className="p-2 rounded shadow shadow-gray-300 cursor-pointer hover:bg-green-500 hover:text-white"
                  >
                    <BsPencilSquare size={20} />
                  </Link>
                  <span className="p-2 rounded shadow shadow-gray-300 cursor-pointer hover:bg-red-500 hover:text-white">
                    <FaXmark size={20} />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
