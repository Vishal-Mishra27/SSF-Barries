// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//       if (currentScrollPos > prevScrollPos) {
//         setIsOpen(false); // Hide sidebar when scrolling up
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos]);

//   return (
//     <nav
//       className={`bg-[#D9D9D9] p-4 shadow-md fixed top-0 w-full z-50 scroll-smooth transition-transform duration-600 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 md:justify-center">
//         {/* Company Logo for Mobile */}
//         <div
//           className="md:hidden text-green-800 text-lg font-bold"
//           style={{ fontFamily: "'Cooper Black', serif" }}
//         >
//           SSF Berries
//         </div>
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-green text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {!isOpen && <FiMenu />}
//         </button>
//         {/* Desktop Menu */}
//         <div
//           className="hidden md:flex space-x-6 text-green-800 scroll-smooth"
//           style={{ fontFamily: "'Cooper Black', serif" }}
//         >
//           <a href="#home" className="hover:text-green-600 scroll-smooth">
//             HOME
//           </a>
//           <a href="#about" className="hover:text-green-600 scroll-smooth">
//             ABOUT
//           </a>
//           <a href="#product" className="hover:text-green-600 scroll-smooth">
//             PRODUCT
//           </a>
//           <Link to="/gallary" className="hover:text-green-600 scroll-smooth">
//             GALLERY
//           </Link>
//           <a href="#contact" className="hover:text-green-600 scroll-smooth">
//             CONTACT
//           </a>
//         </div>
//       </div>
//       {/* Mobile Sidebar Menu */}
//       <div
//         className={`fixed top-0 right-0 w-64 h-full bg-transparent text-white  transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-600 md:hidden pt-5`}
//       >
//         {isOpen && (
//           <button
//             className="absolute top-4 right-4 text-green-800 text-2xl focus:outline-none"
//             onClick={() => setIsOpen(false)}
//           >
//             <FiX />
//           </button>
//         )}
//         <div className="flex flex-col space-y-6 p-6 mt-10 bg-[#D9D9D9] text-green-800 scroll-smooth">
//           <a
//             href="#home"
//             className="hover:text-green-600 scroll-smooth"
//             onClick={() => setIsOpen(false)}
//           >
//             HOME
//           </a>
//           <a
//             href="#about"
//             className="hover:text-green-600 scroll-smooth"
//             onClick={() => setIsOpen(false)}
//           >
//             ABOUT
//           </a>
//           <a
//             href="#product"
//             className="hover:text-green-600 scroll-smooth"
//             onClick={() => setIsOpen(false)}
//           >
//             PRODUCT
//           </a>
//           <a
//             href="/gallary"
//             className="hover:text-green-600 scroll-smooth"
//             onClick={() => setIsOpen(false)}
//           >
//             GALLERY
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-green-600 scroll-smooth"
//             onClick={() => setIsOpen(false)}
//           >
//             CONTACT
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          className="hidden md:flex space-x-6 text-green-800"
          style={{ fontFamily: "'Cooper Black', serif" }}
        >
          <a href="#home" className="hover:text-green-600">
            HOME
          </a>
          <a href="#about" className="hover:text-green-600">
            ABOUT
          </a>
          <a href="#product" className="hover:text-green-600">
            PRODUCT
          </a>
          <Link to="/gallary" className="hover:text-green-600">
            GALLERY
          </Link>
          <a href="#contact" className="hover:text-green-600">
            CONTACT
          </a>
        </div>
      </div>
      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-transparent text-white transform ${
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
        <div className="flex flex-col space-y-6 p-6 mt-10 bg-[#D9D9D9] text-green-800">
          <a href="#home" className="hover:text-green-600">
            HOME
          </a>
          <a href="#about" className="hover:text-green-600">
            ABOUT
          </a>
          <a href="#product" className="hover:text-green-600">
            PRODUCT
          </a>
          <Link to="/gallary" className="hover:text-green-600">
            GALLERY
          </Link>
          <a href="#contact" className="hover:text-green-600">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
