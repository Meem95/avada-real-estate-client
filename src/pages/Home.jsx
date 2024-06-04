import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Faq from "./Home/Faq";
import Pricing from "./Home/Pricing";
import Countries from "./Home/Countries";
import FeatureFood from "./Home/FeatureProperty";

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
        <FeatureFood />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
};

export default Home;
