
import axios from 'axios';

const useAxiosPublic = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Adjust to your API base URL
  });
  
  return axiosInstance;
};

export default useAxiosPublic;
