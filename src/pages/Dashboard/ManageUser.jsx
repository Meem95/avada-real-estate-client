import React from "react";

const ManageUser = () => {
  return (
    <div>
        <div className="text-center mt-5 text-4xl">
            <h1>All Users</h1>
        </div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Agent</th>
              <th>Make Fraud</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                   
                  </div>
                </div>
              </td>
              <td>
              meemfatema95@gmail.com
             
              </td>
              
              <th>
                <button className="btn btn-ghost btn-sm bg-blue-500"> Admin</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm  bg-green-500">Agent</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm  bg-amber-500">Fraud</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm bg-red-500">Delete</button>
              </th>
            </tr>
            <tr>
             
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                   
                  </div>
                </div>
              </td>
              <td>
              meemfatema95@gmail.com
             
              </td>
              
              <th>
                <button className="btn btn-ghost btn-sm bg-blue-500"> Admin</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm  bg-green-500">Agent</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm  bg-amber-500">Fraud</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-sm bg-red-500">Delete</button>
              </th>
            </tr>

            
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ManageUser;
