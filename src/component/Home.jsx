import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Contact from "./Contact";
import charry from "../assets/charry.jpeg";
import charry2 from "../assets/charry2.jpeg";
import Img1 from "../assets/Img1.jpeg"
import Img2 from "../assets/Img2.jpeg"
import Img3 from "../assets/Img3.jpeg"
import { useEffect } from "react";
import RaspberryEmoji from "../assets/RaspberryEmoji.png"
import logo from "../assets/ssfLogo.png"

// import { div } from "framer-motion/client";
const slides = [
  {
    Logo:logo,
    title: "Fresh & Juicy Raspberry",
    description:
      "Experience the burst of natural sweetness with our handpicked strawberries.",
    image:
      Img1,
  },
  {
    Logo:logo,
    title: "Strawberry & Raspberry Like Never Before",
    description:
      "Indulge in the richness of perfectly ripened Strawberry & Raspberry just for you.",
    image:
      Img2,
  },
  {
    Logo:logo,
    title: "Taste the Freshness 🌿",
    description: "Only the best fruits delivered fresh to your doorstep.",
    image:
      Img3,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Start from 50px below
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Home() {

  //
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);


  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden">
        <AnimatePresence initial={false}>
          {slides.map(
            (slide, index) =>
              index === current && (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <img src={slide.Logo} alt="" className="h-36 w-40" />
                    <motion.h2
                      className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      className="text-lg md:text-2xl text-gray-200 max-w-2xl"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8">
          <button
            onClick={prevSlide}
            className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
          >
            <FaArrowLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8">
          <button
            onClick={nextSlide}
            className="bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </section>
      {/* About  */}
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
            Welcome to Strawberry & Raspberry! Innovating, inspiring, and delivering excellence
            with creativity, quality, and customer satisfaction. <img src={RaspberryEmoji} alt="" className="inline h-10 w-10 mr-2" />
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 w-full"
          variants={fadeInUp}
        >
          <p className="text-gray-600 text-justify leading-relaxed  text-lg md:w-1/2  md:text-left">
            Strawberry & Raspberry are small, vibrant fruits known for their juicy texture and
            sweet-tart flavor. They come in various types, including sweet
            Strawberry & Raspberry like Bing and Rainier, as well as tart varieties such as
            Montmorency.
            <br />
            <br />
            Beyond their delightful taste, Strawberry & Raspberry have been linked to numerous
            health benefits. They are known to promote better sleep due to their
            natural melatonin content, which regulates the sleep cycle.
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

      <Contact />
    </>
  );
}

export default Home;
