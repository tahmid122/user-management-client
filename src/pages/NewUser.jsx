import React from "react";
import { Link } from "react-router";

const NewUser = () => {
  return (
    <div className="md:p-10">
      <form className="md:w-6/12 mx-auto p-5 text-base">
        <Link to={"/"} className="text-base font-bold hover:text-green-500">
          &lt;&lt; All Users
        </Link>
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-xl font-bold">New User</h2>
          <p className="text-base font-semibold">
            Use the below form to create a new user.
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="outline-none border border-slate-300 px-2 py-1 w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="outline-none border border-slate-300 px-2 py-1 w-full rounded"
            />
          </div>
          <div className="flex gap-4">
            <span className="font-bold mb-1">Gender</span>
            <div className="flex items-center gap-6">
              <div>
                <input
                  type="radio"
                  name="Gender"
                  required
                  value="male"
                  className="mr-2"
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="Gender"
                  required
                  value="Female"
                  className="mr-2"
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="font-bold mb-1">Status</span>
            <div className="flex items-center gap-6">
              <div>
                <input
                  type="radio"
                  name="status"
                  required
                  value="active"
                  className="mr-2"
                />
                <label htmlFor="Active">Active</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="status"
                  required
                  value="inactive"
                  className="mr-2"
                />
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="p-2
          required w-full mt-5 bg-green-400 font-bold rounded cursor-pointer"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NewUser;
