import React from "react";
import img4 from "../assets/images/img4.jpg";

const SSfFarm = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-stretch bg-[#BFD302] min-h-screen scroll-smooth" id="about" >
      {/* Left Section */}
      <div className="md:w-[60%] flex flex-col justify-between px-10 py-5">
        {/* Top Text */}
        <h4 className="text-green-900 font-semibold text-lg">SSF Farms</h4>

        {/* Middle Content */}
        <div className="space-y-4 flex-grow flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-green-900"
            style={{ fontFamily: "'Cooper Black', serif" }}
          >
            SSF BERRIES
          </h1>
          <p className="text-green-800 text-lg text-justify md:text-justify">
            Experience the taste of real European raspberries & <br />{" "}
            Californian strawberries grown in Maharashtra & <br />
            Rajasthan region.
          </p>
        </div>

        {/* Bottom Button */}
        <div className="mt-auto">
          <button className="px-6 py-3 bg-white text-green-900 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section - Full Height Image */}
      <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto">
        <img
          src={img4}
          alt="Berries"
          layout="fill"
          objectFit="cover"
          className="w-full h-[50vh] md:h-[100vh] object-cover "
        />
      </div>
    </section>
  );
};

export default SSfFarm;
