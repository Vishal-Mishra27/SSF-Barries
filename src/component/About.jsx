import React from "react";
import { motion } from "framer-motion"; 
import charry from "../assets/charry.jpeg";
import charry2 from "../assets/charry2.jpeg";
import { useEffect } from "react";
import RaspberryEmoji from "../assets/RaspberryEmoji.png"



// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Start from 50px below
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};



function About() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <motion.div
        className="max-w-6xl mx-auto text-center p-6 bg-white flex flex-col items-center justify-center"
        id="about"
        initial="hidden"
        animate="visible"
        variants={fadeInUp} // Apply animation
      >
        <h3 className="font-semibold text-3xl pb-7 text-[#f5821f]">About Us</h3>
        <motion.div className="w-full md:w-3/4" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Welcome to Strawberry & Raspberry! Innovating, inspiring, and
            delivering excellence with creativity, quality, and customer
            satisfaction.{" "}
            <img
              src={RaspberryEmoji}
              alt=""
              className="inline h-10 w-10 mr-2"
            />
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 w-full"
          variants={fadeInUp}
        >
          <p className="text-gray-600 leading-relaxed text-lg md:w-1/2 text-justify md:text-left">
            At SSF Farms we believe in delivering the highest quality fruits
            that capture the natural sweetness and flavour of fresh raspberries
            and strawberries.
            <br />
            <br />
            At SSF Berries, we believe in delivering the highest quality frozen
            fruits that capture the natural sweetness and flavour of fresh
            raspberries & strawberries. Our fruits are carefully handpicked,
            frozen at peak ripeness, and packed to preserve their rich taste and
            nutritional value, ensuring that every bite is as fresh as the day
            it was harvested.
          </p>

          <motion.div
            className="md:w-1/2 flex justify-center relative w-90 h-full shadow-2xl rounded-2xl"
            variants={fadeInUp}
          >
            <img
              src={charry}
              alt="Initial"
              className="w-full rounded-2xl h-full object-cover transition-opacity duration-300 hover:opacity-0"
            />

            <img
              src={charry2}
              alt="Hover"
              className="w-full rounded-2xl absolute top-0 left-0 h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        className="w-full md:max-w-6xl mx-auto px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <motion.div
            className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-[#f5821f] mb-4 text-center">
              🍓 Our Mission{" "}
              <img
                src={RaspberryEmoji}
                alt=""
                className="inline h-6 w-6 mr-2"
              />
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              "Our mission is to offer the finest frozen strawberries and
              raspberries, sourced from the best farms and frozen at the peak of
              freshness. We are committed to providing our customers with
              wholesome, convenient, and versatile fruit options that support
              healthy lifestyles. Through sustainable practices and a dedication
              to quality, we aim to make healthy eating accessible and enjoyable
              for everyone, anytime, anywhere."
              <br /><br />
               The mission of Strawberry &
              Raspberry agriculture is to cultivate high-quality, nutritious
              Strawberry & Raspberry through sustainable and innovative farming
              practices. By utilizing eco-friendly techniques, responsible water
              management, and soil conservation methods, Strawberry & Raspberry
              agriculture aims to enhance productivity while preserving natural
              resources. Farmers strive to produce Strawberry & Raspberry that
              meet global standards, ensuring freshness, rich flavor, and high
              nutritional value for consumers worldwide.
              <br />
              <br />
              Additionally, Strawberry & Raspberry agriculture is committed to
              supporting rural economies by creating employment opportunities,
              promoting fair trade, and fostering community development. Through
              advancements in technology, research, and organic farming
              practices, the goal is to reducing
              environmental impact.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-[#f5821f] mb-4 text-center">
              🍓 Our Vision{" "}
              <img
                src={RaspberryEmoji}
                alt=""
                className="inline h-6 w-6 mr-2"
              />
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              "To be the leading provider of high-quality, nutritious, and
              delicious frozen berries, delivering fresh flavours and health
              benefits to households worldwide, all year round."
              <br />
              <br />
              A Strawberry & Raspberry farmer envisions a future where
              high-quality, sustainably grown Strawberry & Raspberry are
              accessible to consumers worldwide while preserving the environment
              for future generations. Through the adoption of advanced farming
              techniques, organic practices, and climate-smart agriculture, the
              goal is to enhance productivity, improve fruit quality, and
              minimize ecological impact. By embracing innovation and research,
              Strawberry & Raspberry farmers aim to cultivate resilient orchards
              that withstand environmental challenges and changing market
              demands.
              <br />
              <br />
              Beyond production, the vision includes strengthening local
              economies by creating fair employment opportunities and promoting
              ethical trade. Strawberry & Raspberry farmers aspire to build
              strong connections with consumers by offering fresh, flavorful,
              and chemical-free Strawberry & Raspberry. Through continuous
              learning, technological integration, and eco-conscious farming,
              the vision is to establish a thriving, sustainable Strawberry &
              Raspberry industry that benefits farmers.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
