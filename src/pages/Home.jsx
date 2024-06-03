import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";


const Home = () => {
  
 

  return (
    <div className="m-0 p-0">
      <Helmet>
        <title> Avada | Home</title>
      </Helmet>
      <div>
        <Slider />
      </div>

     
    </div>
  );
};

export default Home;
