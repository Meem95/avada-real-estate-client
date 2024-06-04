import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Faq from "./Home/Faq";
import Pricing from "./Home/Pricing";
import { Fade } from "react-awesome-reveal";
import FeaturedProperty from "./Home/FeaturedProperty";
import Review from "./Home/Review";

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
        <Pricing />
      </div>
      <div className="">
        <FeaturedProperty />
      </div>
      <Fade direction="left" duration="2000">
  
          <Review />
       
      </Fade>
      
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
