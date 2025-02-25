import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from '../assets/ssfLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#cdcdcd] text-gray-900 p-2 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-16 h-16 object-contain md:ml-0 ml-5" />
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          <li className="font-semibold hover:text-gray-700 cursor-pointer">
            <Link to="/home">Home</Link>
          </li>
          
          <span className="h-5 w-px bg-gray-900"></span>
          <li className=" font-semibold hover:text-gray-700 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          
          <span className="h-5 w-px bg-gray-900"></span>
          <div className="relative">
            <li
              className="font-semibold hover:text-gray-700 cursor-pointer"
              onClick={() => setProductMenuOpen(!productMenuOpen)}
            >
              <div className="flex items-center space-x-1">
                <span>Product</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    productMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </li>
            {productMenuOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-[#aeadad] p-2 rounded-lg space-y-2 w-40">
                <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                  <Link to="/frozenCharry" onClick={() => setProductMenuOpen(false)}>Frozen Strawberry</Link>
                </li>
                <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                  <Link to="/frozenPulp" onClick={() => setProductMenuOpen(false)}>Frozen Respberry</Link>
                </li>
                
              </ul>
            )}
          </div>
          <span className="h-5 w-px bg-gray-900"></span>
          <li className=" font-semibold hover:text-gray-700 cursor-pointer">
            <Link to="/gallary">Gallery</Link>
          </li>
          <span className="h-5 w-px bg-gray-900"></span>
          <li className="font-semibold hover:text-gray-700 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-200 p-4 rounded-lg">
          <li className="hover:text-gray-800 cursor-pointer">
            <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-gray-800 cursor-pointer">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          
          <li
            className="hover:text-gray-800 cursor-pointer"
            onClick={() => setProductMenuOpen(!productMenuOpen)}
          >
            <div className="flex items-center space-x-1">
              <span>Product</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  productMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </li>
          {productMenuOpen && (
            <ul className="flex flex-col items-center space-y-2 mt-2 bg-[#a5a4a4] p-2 rounded-lg w-40">
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                <Link to="/frozenCharry" onClick={() => {setIsOpen(false),setProductMenuOpen(false)}}> Frozen Strawberry</Link>
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                <Link to="/frozenPulp"  onClick={() => {setIsOpen(false),setProductMenuOpen(false)}}>Frozen Respberry</Link>
              </li>
              
            </ul>
          )}
          
          <li className="hover:text-gray-800 cursor-pointer">
            <Link to="/gallary" onClick={() => setIsOpen(false)}>Gallery</Link>
          </li>
          <li className="hover:text-gray-800 cursor-pointer">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
