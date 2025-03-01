import React from "react";
// import wholeImg from "../assets/images/strr.png"; // Replace with correct path
import slicedImg from "../assets/images/rasp1.jpg"; // Replace with correct path
import scoopedImg from "../assets/images/rasp2.jpg"; // Replace with correct path

const OffersRaspberries = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 shadow-inner min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-900 md:mb-16 md:mt-7 mb-8"
        style={{ fontFamily: "'Cooper Black', serif" }}
      >
        We Offer Raspberries
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row md:justify-around  gap-10 md:gap-50">
        {/* Sliced */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={slicedImg}
            alt="Sliced Strawberry"
            className="w-48 h-48 sm:w-48 sm:h-48 md:w-50 md:h-70 rounded-2xl object-cover md:rounded-[50%50%_50%_50%/_34%_34%_34%_34%]"
          />
          <h3 className="text-green-900 font-semibold text-lg sm:text-xl">
            FRESH
          </h3>
        </div>
        {/* Whole */}
        {/* <div className="flex flex-col items-center space-y-4">
          <img 
            src={wholeImg} 
            alt="Whole Strawberry" 
            className="w-48 h-48 sm:w-48 sm:h-48 md:w-full md:h-70 rounded-2xl object-cover " 
          />
          <h3 className="text-green-900 font-semibold text-lg sm:text-xl">FRESH</h3>
        </div> */}

        {/* Scooped */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={scoopedImg}
            alt="Scooped Strawberry"
            className="w-48 h-48 sm:w-48 sm:h-48 md:w-50 md:h-70 rounded-2xl object-cover md:rounded-[50%50%_50%_50%/_34%_34%_34%_34%]"
          />
          <h3 className="text-green-900 font-semibold text-lg sm:text-xl">
            FROZEN
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-green-900 font-bold text-lg sm:text-xl mt-8 px-4">
        Kokanee varirty
      </p>
    </section>
  );
};

export default OffersRaspberries;
