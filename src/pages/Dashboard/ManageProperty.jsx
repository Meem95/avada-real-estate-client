import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProperty from "../../hooks/useProperty";
import Swal from "sweetalert2";

const ManageProperty = () => {
  const [property, , refetch] = useProperty();
  const axiosSecure = useAxiosSecure();

  const handleVerifiedItem = (item) => {
    axiosSecure.patch(`/property/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${item.title} is now Verified!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleRejectedItem = (item) => {
    axiosSecure.patch(`/property/reject/${item._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${item.title} is Rejected!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>All Properties</h1>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th>#</th>
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
            {property.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td>{item.location}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  {item.first_price} to {item.second_price}
                </td>
                <td>
                {item.status === "verified" ? (
                    "Verified"
                  ) : item.status === "rejected" ? (
                    "Rejected"
                  ) : (
                    <>
                      <button
                        onClick={() => handleVerifiedItem(item)}
                        className="btn btn-ghost btn-sm bg-amber-500"
                      >
                        Verify
                      </button>
                      <button
                        onClick={() => handleRejectedItem(item)}
                        className="btn btn-ghost btn-sm bg-red-500"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperty;
