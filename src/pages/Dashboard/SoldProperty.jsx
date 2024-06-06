import React from "react";

const SoldProperty = () => {
  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>Sold Property</h1>
      </div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Property Title</th>
              <th>Property Location</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Sold Price </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Dhaka, BAngladesh</td>
              <td>Meem</td>
              <td>meemfatema95@gmail.com</td>
              <td>5000 to 6000</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Dhaka, BAngladesh</td>
              <td>Meem</td>
              <td>meemfatema95@gmail.com</td>
              <td>5000 to 6000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldProperty;
