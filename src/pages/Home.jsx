import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Faq from "./Home/Faq";
import Pricing from "./Home/Pricing";
import { Fade } from "react-awesome-reveal";
import FeaturedProperty from "./Home/FeaturedProperty";
import Review from "./Home/Review";
import Gallery from "./Home/Gallery";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-0 m-0 ">
      <Helmet>
        <title> Avada | Home</title>
      </Helmet>
      <div>
        <Slider />
      </div>

      <div className="">
        <FeaturedProperty />
      </div>
      <div>
        <Pricing />
      </div>
      <Fade direction="left" duration="2000">
        <Gallery />
      </Fade>
      <div>
        <Review />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
