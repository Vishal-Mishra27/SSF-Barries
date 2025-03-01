import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FreshCharry from "../assets/freshCherry.jpeg";
import juccyCharry from "../assets/juccyCharry.jpeg";
import desert from "../assets/desert.jpeg";
import natural from "../assets/natural.jpeg";
import charry from "../assets/charry.jpeg";
import fressPulp from "../assets/FressPulp.jpeg";
import ripen from "../assets/ripenCherry.jpeg";
import naturalProduct from "../assets/naturalProduct.jpeg";
import sweet from "../assets/sweet.jpeg";
import frozen from "../assets/frozen.jpeg";
import organic from "../assets/oragnic.jpeg";
import natureFriendly from "../assets/natureFriendly.jpeg";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const images = [
  {
    src: FreshCharry,
    text: "Fresh Strawberries",
  },
  {
    src: juccyCharry,
    text: "Juicy Strawberry & Raspberry",
  },
  {
    src: charry,
    text: "Frozon Strawberry & Raspberry",
  },
  {
    src: fressPulp,
    text: "Fress Strawberry & Raspberry Pulp",
  },
  {
    src: natural,
    text: "Nature's Beauty",
  },
  {
    src: desert,
    text: "Delicious Desserts",
  },

  {
    src: naturalProduct,
    text: "Natural Product",
  },
  {
    src: sweet,
    text: "Sweet and Healthy",
  },
  {
    src: ripen,
    text: "Red and Ripen Strawberry & Raspberry",
  },
  {
    src: frozen,
    text: "Store for long Time",
  },
  {
    src: organic,
    text: "Organic Farming ",
  },
  {
    src: natureFriendly,
    text: "Nature Friendly",
  },
];

function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

   const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
        if (currentScrollPos > prevScrollPos) {
          setIsOpen(false); // Hide sidebar when scrolling up
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`bg-[#D9D9D9] p-4 shadow-md fixed top-0 w-full z-50 transition-transform duration-600 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:justify-center">
          {/* Company Logo for Mobile */}
          <div
            className="md:hidden text-green-800 text-lg font-bold"
            style={{ fontFamily: "'Cooper Black', serif" }}
          >
            SSF Berries
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && <FiMenu />}
          </button>
          {/* Desktop Menu */}
          <div
            className="hidden md:flex space-x-6 text-green-800 scroll-smooth"
            style={{ fontFamily: "'Cooper Black', serif" }}
          >
            <Link to="/" className="hover:text-green-600">
              HOME
            </Link>
            <Link to="/gallary" className="hover:text-green-600">
              GALLERY
            </Link>
          </div>
        </div>
        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-transparent text-white  transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-600 md:hidden pt-5`}
        >
          {isOpen && (
            <button
              className="absolute top-4 right-4 text-green-800 text-2xl focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
          )}
          <div className="flex flex-col space-y-6 p-6 mt-10 bg-[#D9D9D9] text-green-800 scroll-smooth">
            <Link to="/" className="hover:text-green-600">
              HOME
            </Link>
            <Link to="/gallary" className="hover:text-green-600">
              GALLERY
            </Link>
          </div>
        </div>
      </nav>
      {/* --------------------------------------- */}
      <div className="mt-5 py-6">
        <div
          className="min-h-screen p-4 bg-gradient-to-br from-rose-50 to-pink-100 mt-4"
          id="gallery"
        >
          <h2 className="text-4xl font-semibold text-center text-[#f5821f] mb-10">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.07, rotate: 1 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.text}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:blur-sm"
                  whileHover={{
                    x: [0, 8, -8, 0],
                    transition: { duration: 0.5 },
                  }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-white/80 via-pink-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:opacity-100 sm:bg-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.p
                    className="text-lg sm:text-2xl font-bold text-[#f5821f] drop-shadow-lg text-center px-3 tracking-wide  py-1 sm:bg-transparent sm:py-0"
                    initial={{ scale: 0.9, opacity: 1 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 220 }}
                  >
                    {image.text}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Gallery;
