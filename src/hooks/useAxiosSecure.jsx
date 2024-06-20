import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import UseAuth from "./UseAuth";

const axiosSecure=axios.create({
    // baseURL:'https://b9a12-real-estate-server.vercel.app/'
    baseURL:'https://b9a12-real-estate-server.vercel.app/'
})
const UseAxiosSecure = () => {
    const navigate=useNavigate();
    const {logOut}= useContext(AuthContext)

    // request interceptors to add authirazittion headears for every secure call by api 
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem("access-token");
         console.log("token",token);
        config.headers.authorization=`Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })

// intercept for 401 and 404 secure
axiosSecure.interceptors.response.use(function(res){
    return res
},async function(error){
    const status=error.response.status;
    console.log("status code error in the interceptors",error);
    if (status===401 || status===403) {
        await logOut
        navigate("/login")
    }
    return Promise.reject(error)
})



 return axiosSecure
};

export default UseAxiosSecure;