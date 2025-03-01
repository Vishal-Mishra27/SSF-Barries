import React from "react";
import fruitImage from "../assets/images/strr3.jpg"; // Replace with your actual image path

const Weprovide = () => {
  return (
    <section className="bg-[#BFD302] min-h-screen flex items-center justify-center p-6 md:p-10">
      <div className="max-w-auto mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* Text Content */}
        <div className="text-left md:ml-3">
          <h1
            className="text-green-900 text-4xl  md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Cooper Black', serif" }}
          >
            What we provide
          </h1>
          <h2 className="text-green-800 font-semibold text-md md:text-lg mt-4">
            Naturally grown fresh & frozen
          </h2>
          <p className="text-[#2B5C00] text-md md:text-lg italic mt-2 md:mt-10 text-justify">
            Our fruits are carefully handpickes, frozen at peak ripeness, and
            packed to preserve their rich taste and nutritional value, ensuring
            that every bite is as fresh as the day it was harvested.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={fruitImage}
            alt="Fresh Berries"
            className="w-full h-full md:w-[450px] md:h-[600px] shadow-lg object-cover md:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Weprovide;
