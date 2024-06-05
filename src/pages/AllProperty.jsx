import { Link, useLoaderData } from "react-router-dom";
import FeaturedProperty from "./Home/FeaturedProperty";
import { useState } from "react";
import { Helmet } from "react-helmet";
import SingleProperty from "./Home/SingleProperty";

const AllProperty = () => {
  return (
    <div>
      <Helmet>
        <title> Avada | All Property </title>
      </Helmet>
      <div className="min-h-screen max-w-7xl mx-auto">
        <section className="py-6 sm:py-12 ">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
           <SingleProperty></SingleProperty>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProperty;
