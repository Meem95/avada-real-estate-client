import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProperty from "../../hooks/useProperty";
import Swal from "sweetalert2";

const ManageAdevertiseProperty = () => {
  const [property, , refetch] = useProperty();
  const axiosSecure = useAxiosSecure();

  const handleAdvertise = async (id) => {
    try {
      const res = await axiosSecure.patch(`/advertise-property/${id}`);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Property advertised successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch(); // Refetch the properties to update the list
      }
    } catch (error) {
      console.error("Error advertising property:", error);
    }
  };

  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>All Advertise Properties</h1>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Property Image</th>
              <th>Property Title</th>
              <th>Property Location</th>
              <th>Agent Name</th>
              <th>Price Range</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {property?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-14">
                      <img
                        src={item.image}
                        alt="Home In Merrick Way"
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="font-bold">{item.title}</div>
                  </div>
                </td>
                <td>{item.location}</td>
                <td>{item?.agentName}</td>
                <td>
                  {item.first_price} to {item.second_price}
                </td>
                <td>
                  {item.type !== "advertise" && (
                    <button
                      className="btn btn-ghost btn-sm bg-green-400"
                      onClick={() => handleAdvertise(item._id)}
                    >
                      Advertise
                    </button>
                  )}
                  {item.type === "advertise" && (
                    <span className="text-green-500 font-bold">Advertised</span>
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

export default ManageAdevertiseProperty;
