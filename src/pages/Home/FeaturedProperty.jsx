import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { CiCalendarDate } from "react-icons/ci";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import useProperty from "../../hooks/useProperty";
import SingleProperty from "./SingleProperty";


const FeaturedProperty = () => {
  const [property] = useProperty();
  const popular = property.filter(item => item.type === 'advertise');
  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return str;
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <div className="mb-16 space-y-4 text-center">
			<h1 className="text-4xl font-semibold leading-tight">Featured <span className="text-[#65bc7b]">Property</span></h1>
			<p className="px-4 sm:px-8 lg:px-24">Discover unparalleled elegance and modern design in our featured property, offering breathtaking views and exceptional living spaces. </p>
			
		</div>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {
                    popular.map(item => <SingleProperty
                        key={item._id}
                        item={item}
                    ></SingleProperty>)
                }
        
      </div>
    </motion.div>
  );
};
FeaturedProperty.propTypes = {};
export default FeaturedProperty;
