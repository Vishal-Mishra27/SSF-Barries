import React, { useState } from "react";
import { motion } from "framer-motion";
import juccyCharry from "../assets/juccyCharry.jpeg";
import charry2 from "../assets/charry2.jpeg";
import { useEffect } from "react";
import RaspberryEmoji from "../assets/RaspberryEmoji.png"


function FrozenPulp() {
  const images = [juccyCharry, charry2];
  const [currentImage, setCurrentImage] = useState(images[0]);
  useEffect(()=>{
        window.scrollTo(0,0)
      },[])

  return (
    <>

      <div className="bg-white min-h-screen font-['Fredoka']">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-[#f5821f] py-6 text-center font-merriweather md:mt-8"
        >
          Frozen Raspberry
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto md:w-3/4 w-90 h-96 rounded-lg shadow-lg overflow-hidden flex justify-center items-center"
        >
          <img
            src={currentImage}
            alt="Frozen pulp"
            className="w-full h-full object-cover rounded-lg transition-all duration-300"
            onMouseEnter={() => setCurrentImage(images[1])}
            onMouseLeave={() => setCurrentImage(images[0])}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto p-6"
        >
          <h2 className="text-3xl font-semibold text-center text-[#f5821f]">
            Why Choose Our Frozen Raspberry?
          </h2>
          <p className="mt-4 text-gray-600 text-justify">
            Our frozen fruit Raspberry is made from fresh, high-quality fruits that
            are processed and frozen at peak ripeness. Perfect for smoothies,
            desserts, beverages, and cooking!.
          </p>
          <p className="mt-4 text-gray-600 text-justify">
            Sourced from the finest berries and carefully processed to preserve
            their natural taste, color, and nutrients, our frozen pulp is
            perfect for smoothies, desserts, beverages, and culinary creations.
            Whether you're looking for the sweet tang of strawberries, the bold
            richness of blackberries, or the refreshing zest of blueberries, our
            frozen Raspberry delivers convenience without compromising quality.
          </p>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col md:flex-row items-center mt-6"
          >
            <div className="md:w-1/2">
  <ul className="space-y-2 text-gray-700 flex flex-col">
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      100% Natural & No Preservatives
    </li>
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      Rich in Vitamins & Minerals
    </li>
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      Convenient & Ready to Use
    </li>
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      Perfect for Juices, Smoothies & Desserts
    </li>
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      Sustainably Sourced & Freshly Processed
    </li>
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      Available in Various Fruit Varieties
    </li>
    <li>
      <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />
      Free from Artificial Additives & Colors
    </li>
  </ul>
</div>

          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-4 text-gray-600"
          >
            Enjoy the delicious taste of our frozen Raspberry all year round, knowing
            that each batch is carefully processed to retain its natural
            sweetness and nutritional value.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-4 text-gray-600 text-justify"
          >
            "Packed with nutrients and flavor, our frozen Raspberry brings the
            taste of fresh berries to your recipes—anytime, anywhere!"
          </motion.p>
        </motion.div>
      </div>

    </>
  );
}

export default FrozenPulp;
