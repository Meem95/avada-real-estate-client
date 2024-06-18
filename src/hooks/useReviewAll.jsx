// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useReviewAll = () => {

    const axiosPublic = useAxiosPublic();
  
        const {data: reviews = [], isPending: loading, refetch} = useQuery({
          queryKey: ['get-reviews'], 
          queryFn: async() =>{
              const res = await axiosPublic.get('/get-reviews');
              return res.data;
          }
      })


    return [reviews, loading, refetch]
}

export default useReviewAll;