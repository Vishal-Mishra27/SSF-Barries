import React, { useState } from "react";
import { motion } from "framer-motion";
import charry from "../assets/charry.jpeg";
import FroZenCherry2 from "../assets/frozenCherry2.jpeg";
import { useEffect } from "react";



function FrozenCherry() {
  const images = [charry, FroZenCherry2];
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="bg-white min-h-screen font-['Fredoka']"
      >
        <h1 className="text-5xl text-[#f5821f] py-6 text-center font-merriweather md:mt-8">
          Frozen Strawberry
        </h1>

        {/* Image Section */}
        <div className="relative mx-auto md:w-3/4 w-90 h-96 rounded-lg shadow-lg overflow-hidden flex justify-center items-center">
          <img
            src={currentImage}
            alt="Frozen Cherries"
            className="w-full h-full object-cover rounded-lg transition-all duration-300"
            onMouseEnter={() => setCurrentImage(images[1])}
            onMouseLeave={() => setCurrentImage(images[0])}
          />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl text-center font-semibold text-[#f5821f]">
            Why Choose Our Frozen Strawberry?
          </h2>
          <p className="mt-4 text-gray-600 text-justify">
            Our frozen Strawberry are hand-picked at peak ripeness and flash-frozen
            to preserve their freshness and flavor. Perfect for smoothies,
            desserts, or a healthy snack!
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            Indulge in the rich, natural sweetness of our premium frozen Strawberry.
            Carefully selected and frozen at peak ripeness, our Strawberry retain
            their vibrant flavor, deep color, and essential nutrients.
          </p>

          {/* List & Image */}
          <div className="flex flex-col md:flex-row items-center mt-6">
            <div className="md:w-1/2">
              <ul className="space-y-2 text-gray-700">
                <li>🍓 100% Natural & No Preservatives</li>
                <li>🍓 Rich in Antioxidants & Nutrients</li>
                <li>🍓 Convenient & Ready to Eat</li>
                <li>🍓 Ideal for baking, cooking, and blending into juices</li>
                <li>🍓 Sustainably sourced from premium farms</li>
                <li>🍓 Available in different packaging sizes</li>
                <li>🍓 Free from artificial additives and colors</li>
              </ul>
            </div>
           
          </div>

          <p className="mt-4 text-gray-600 text-justify">
            Enjoy the delicious taste of our frozen Strawberry all year round,
            knowing that each batch is carefully processed to retain its natural
            sweetness and nutritional value.
          </p>
        </div>
      </motion.div>

    </>
  );
}

export default FrozenCherry;
