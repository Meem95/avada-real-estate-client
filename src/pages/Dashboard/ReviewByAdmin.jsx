import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useReview from "../../hooks/useReview";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const ReviewByAdmin = () => {
  const {data: reviews = [], isPending: loading, refetch} = useQuery({
    queryKey: ['get-reviews'], 
    queryFn: async() =>{
        const res = await axios.get('http://localhost:5000/get-reviews');
        return res.data;
    }
})
console.log(reviews)
const axiosSecure = useAxiosSecure();
  
  const handleReviewDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/delete-reviews/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
        <div  className="text-center mt-5 text-4xl">
            <h1 >All Reviews</h1>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
      {reviews?.map((item) => (
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={item.userImage}
                  alt={item.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p className="font-bold">Agent Name: <span>{item.name}</span> </p>
                <p>{item.review}</p>
                <div className="card-actions">
                  <button onClick={() => handleReviewDeleteItem(item)}  className="  border border-[#65bc7b] text-[#65bc7b] py-3 px-3 text-sm font-bold uppercase tracking-wider transition-all duration-150 ease-in-out focus:outline-none group mt-4">Delete</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewByAdmin;
