// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import useReviewAll from "./useReviewAll";

const useReviewPropertyId = ({ propertyId }) => {
    const axiosPublic = useAxiosPublic();
   const property = useReviewAll()
   console.log("property", property)

    const {data: reviewsProperty = [], isPending: loading, refetch} = useQuery({
        queryKey: ['reviewsProperty'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/reviews-property/${property.propertyId}`);
            return res.data;
        }
    })

    console.log('Property ID:', propertyId);
    return [reviewsProperty, loading, refetch]
}

export default useReviewPropertyId;