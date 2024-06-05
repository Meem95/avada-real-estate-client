import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { CiCalendarDate } from "react-icons/ci";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import SingleProperty from "./SingleProperty";

const FeaturedProperty = () => {
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
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <SingleProperty></SingleProperty>
      </div>
    </motion.div>
  );
};
FeaturedProperty.propTypes = {};
export default FeaturedProperty;
