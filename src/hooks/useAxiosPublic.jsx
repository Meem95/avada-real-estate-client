
import axios from 'axios';

const useAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://b9a12-real-estate-server.vercel.app/', // Adjust to your API base URL
  });
  
  return axiosInstance;
};

export default useAxiosPublic;
