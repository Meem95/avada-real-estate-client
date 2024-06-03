import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Faq from "./Home/Faq";


const Home = () => {
  
 

  return (
    <div className="max-w-7xl mx-auto p-0 m-0 ">
      <Helmet>
        <title> Avada | Home</title>
      </Helmet>
      <div>
        <Slider />
      </div>
      <div>
        <Faq />
      </div>

     
    </div>
  );
};

export default Home;
