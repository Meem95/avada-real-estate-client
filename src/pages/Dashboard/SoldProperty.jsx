import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const SoldProperty = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const {
    data: boughtPropertyAgent = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["boughtPropertyAgent"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agent-boughtProperty/${user?.email}`);
      return res.data;
    },
  });
  console.log(boughtPropertyAgent);
  const totalOfferPrice = boughtPropertyAgent.reduce((total, item) => total + item.offer_price, 0);

  return (
    <div>
      <div className="text-center mt-5 text-4xl">
        <h1>Sold Property <span className="text-bold">total sold: {totalOfferPrice}</span> </h1>
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
       {
        boughtPropertyAgent?.map((item,idx)=><tr key={idx}>
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
        </tr>
        )
       }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldProperty;
