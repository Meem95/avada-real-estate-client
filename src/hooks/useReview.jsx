// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useReview = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const {data: reviews = [], isPending: loading, refetch} = useQuery({
        queryKey: ['reviews'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/reviews/${user?.email}`);
            return res.data;
        }
    })


    return [reviews, loading, refetch]
}

export default useReview;