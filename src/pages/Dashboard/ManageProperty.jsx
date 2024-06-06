const ManageProperty = () => {
  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>All Property</h1>
      </div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Property Title</th>
              <th>Property Location</th>
              <th>Agent Name</th>
              <th>Agent Email</th>
              <th>Price Range</th>
              <th>Verify</th>
              <th>Reject</th>
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

             
              <th>
                <button className="btn btn-ghost btn-sm  bg-green-500">
                  Verify
                </button>
              </th>
             
              <th>
                <button className="btn btn-ghost btn-sm bg-red-500">
                  Delete
                </button>
              </th>
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

             
              <th>
                <button className="btn btn-ghost btn-sm  bg-green-500">
                  Verify
                </button>
              </th>
             
              <th>
                <button className="btn btn-ghost btn-sm bg-red-500">
                  Delete
                </button>
              </th>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperty;
