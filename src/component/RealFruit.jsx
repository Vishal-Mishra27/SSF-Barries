import React from "react";
import fruitImage from "../assets/images/real.jpg"; // Replace with your actual image path

const RealFruit = () => {
  return (
    <section className="bg-[#F8F3ED] min-h-screen flex items-center justify-center p-6 md:p-10" id="home">
      <div className="max-w-auto mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* Text Content */}
        <div className="text-left md:ml-3">
          <h1
            className="text-green-900 text-4xl  md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Cooper Black', serif" }}
          >
            Real Fruit <br /> Rich Taste
          </h1>
          <h2 className="text-green-800 font-semibold text-md md:text-lg mt-4">
            Our philosophy
          </h2>
          <p className="text-green-700 text-md md:text-lg italic mt-2 text-justify">
            "To be the leading provider of high-quality, nutritious, and
            delicious frozen berries, delivering fresh flavors and health
            benefits worldwide, all year round."
          </p>
        </div>
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={fruitImage}
            alt="Fresh Berries"
            className="w-full h-full md:w-[450px] md:h-[600px] shadow-lg object-cover md:rounded-[50%50%_50%_50%/_34%_34%_34%_34%]"
          />
        </div>
      </div>
    </section>
  );
};

export default RealFruit;
