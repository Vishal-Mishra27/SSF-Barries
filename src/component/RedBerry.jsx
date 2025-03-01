import React from "react";
import berryImg from "../assets/images/img4.jpg"; // Replace with correct path

const RedBerry = () => {
  return (
    <section className="bg-[#F7C948] min-h-screen flex items-center justify-center p-6 md:p-10">
      <div className="max-w-auto mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-30">
        {/* Left: Image + Heading with Spacing */}
        <div className="w-full md:w-1/2 flex flex-col space-y-5 md:space-y-8">
          <h2
            className="text-green-900 text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Cooper Black', serif" }}
          >
            So much flavour in a little red berry!
          </h2>
          <img
            src={berryImg}
            alt="Berries"
            className="w-full h-full rounded-lg object-cover md:h-80 md:w-full md:rounded-[30%30%_30%_30%/_50%_50%_50%_50%]"
          />
        </div>

        {/* Right: Content */}
        <div className=" md:px-4 w-full md:w-1/2 ">
          <p className="text-green-900 text-justify text-lg mt-2 md:mt-3 md:text-justify">
            At SSF Berries, we believe in delivering the highest quality
            frozen fruits that capture all the natural sweetness and flavors.
          </p>
          <button className=" w-full md:w-auto mt-10 md:mt-30 bg-white text-green-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default RedBerry;
