import React from "react";
import Logo from "../assets/ssfLogo.png";

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Contact from "./Contact";
import charry from "../assets/charry.jpeg";
import charry2 from "../assets/charry2.jpeg";
import Img1 from "../assets/slide4.jpg"
import Img2 from "../assets/Img2.jpeg"
import Img3 from "../assets/Img3.jpeg"
import { useEffect } from "react";
import RaspberryEmoji from "../assets/RaspberryEmoji.png"
import logo from "../assets/ssfLogo.png"
import { useState } from "react";
import { Slice } from "lucide-react";

// import { div } from "framer-motion/client";
const slides = [
  {
    Logo: logo,
    title: "Fresh & Juicy Raspberries",
    description:
      "Experience the burst of natural sweetness with our handpicked raspberries.",
    image: Img1,
  },
  {
    Logo: logo,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // Start from 50px below
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


const CenteredImage = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" w-full h-[100vh] overflow-hidden">
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
                  {index === 0 ? (
                    <img
                      src={slide.Logo}
                      alt=""
                      className="absolute top-14 left-4 h-20 w-24"
                    />
                  ) : null}
                  {index === 1 ? (
                    <img
                      src={slide.Logo}
                      alt=""
                      className="absolute inset-0 m-auto h-150 w-150"
                    />
                  ) : null}
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
  );
};

export default CenteredImage;
