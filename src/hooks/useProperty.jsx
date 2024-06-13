// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProperty = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/property/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: property = [], isPending: loading, refetch} = useQuery({
        queryKey: ['property'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/property');
            return res.data;
        }
    })


    return [property, loading, refetch]
}

export default useProperty;