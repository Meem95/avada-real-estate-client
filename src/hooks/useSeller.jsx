import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseSeller = () => {
const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: isSeller, isPending: isSellerLoading } = useQuery({
    queryKey: ["isSeller", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/agent/${user?.email}`);
      return res.data.isSeller;
    },
  });
  return [isSeller, isSellerLoading];
};

export default UseSeller;
