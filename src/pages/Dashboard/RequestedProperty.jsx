import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RequestedProperty = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: sells = [], isPending: loading, refetch } = useQuery({
    queryKey: ['get-sells', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/get-sells/${user?.email}`);
      return res.data;
    },
  });

  // Local state to keep track of accepted or rejected properties
  const [handledRequests, setHandledRequests] = useState({});

  const handleAccept = async (id) => {
    try {
      const res = await axiosSecure.patch(`/accept-property-request/${id}`, { email: user?.email });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Property accepted successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setHandledRequests((prev) => ({ ...prev, [id]: 'accepted' }));
        refetch();
      }
    } catch (error) {
      console.error("Error accepting property:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await axiosSecure.patch(`/reject-property-request/${id}`, { email: user?.email });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Property rejected successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setHandledRequests((prev) => ({ ...prev, [id]: 'rejected' }));
        refetch();
      }
    } catch (error) {
      console.error("Error rejecting property:", error);
    }
  };

  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>Requested Property</h1>
      </div>
      <div className="overflow-x-auto max-w-6xl mx-auto mt-5">
        <table className="table text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Property Title</th>
              <th>Property Location</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Offered Price</th>
              <th>Accept/Reject</th>
              
            </tr>
          </thead>
          <tbody>
            {sells.map((item,index) => (
              <tr >
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
                <td>{item.offer_price}</td>
                <td>
                {handledRequests[item._id] ? (
                    <span className={`font-semibold ${handledRequests[item._id] === 'accepted' ? 'text-green-500' : 'text-red-500'}`}>
                      {handledRequests[item._id] === 'accepted' ? 'Accepted' : 'Rejected'}
                    </span>
                  ) : (
                    <>
                      <button
                        className="btn btn-ghost btn-sm bg-green-500 mr-2"
                        onClick={() => handleAccept(item._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-ghost btn-sm bg-red-500"
                        onClick={() => handleReject(item._id)}
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

export default RequestedProperty;
