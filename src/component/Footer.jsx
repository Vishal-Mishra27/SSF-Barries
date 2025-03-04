import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import Logo from '../assets/ssfLogo.png'
import { Link } from 'react-router-dom';
import RaspberryImage from "../assets/RaspberryEmoji.png"
// import { MdComputer } from 'react-icons/md';
const FooterBg = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
};

function Footer () {
  return (
    <div
      style={FooterBg}
      className="bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 shadow-inner"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 py-10 border-t-2 border-pink-300/50 text-gray-800">
          {/* Company Info */}
          <div className="py-4 px-2 space-y-5">
            <div className="text-3xl flex items-center gap-2 font-extrabold uppercase text-[#f5821f]">
              <img src={Logo} alt="Logo" className="h-32 w-34" />
            </div>
            <p className="text-base leading-relaxed text-gray-700 ">
              Delivering the best food experience with quality and taste. Fresh,
              organic, and handpicked berries just for you!
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="hover:text-pink-500 transition-transform transform hover:scale-110"
                aria-label="Location"
              >
                <HiLocationMarker className="text-3xl text-[#f5821f]" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918857069147"
                target="_blank"
                className="hover:text-green-500 transition-transform transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div className="py-4 px-2">
            <h2
              className="text-2xl font-semibold text-[#f5821f] mb-5"
              style={{ fontFamily: "'Cooper Black', serif" }}
            >
              Important Links
            </h2>
            <ul className="space-y-4 text-lg font-medium">
              {/* <li><a className="hover:text-[#f5831fdd] duration-200"><Link to="/home">🏠 Home</Link></a></li>
              <li><a className="hover:text-[#f5831fdd] duration-200"><Link to="/about">ℹ️ About</Link></a></li>
              <li><a className="hover:text-[#f5831fdd] duration-200"><Link to="/gallary">🖼️ Gallery</Link></a></li>
              <li><a className="hover:text-[#f5831fdd] duration-200"><Link to="/contact">📞 Contact</Link></a></li> */}
              <li>
                <Link to="/" className="hover:text-green-600">
                  🏠 HOME
                </Link>
              </li>
              <li>
                <a className="hover:text-[#f5831fdd] duration-200" href="#">
                  ℹ️ About
                </a>
              </li>
              <li>
                <Link to="/gallary" className="hover:text-green-600">
                  🖼️ Gallery
                </Link>
              </li>
              <li>
                <a className="hover:text-[#f5831fdd] duration-200" href='#'>
                  📞 Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="py-4 px-2">
            <h2
              className="text-2xl font-semibold text-[#f5821f] mb-5"
              style={{ fontFamily: "'Cooper Black', serif" }}
            >
              Products
            </h2>
            <ul className="space-y-4 text-lg font-medium">
              <li>
                <a href="#" className="hover:text-[#f5831fdd] duration-200">
                  🍓 Strawberries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5831fdd] duration-200">
                  <img
                    src={RaspberryImage}
                    alt=""
                    className="inline h-5 w-5 mr-2"
                  />
                  Raspberries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5831fdd] duration-200">
                  🌱 Organic Berries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5831fdd] duration-200">
                  🥗 Seasonal Picks
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="py-4 px-2">
            <h2
              className="text-2xl font-semibold text-[#f5821f] mb-5"
              style={{ fontFamily: "'Cooper Black', serif" }}
            >
              Contact
            </h2>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="font-medium">📞 Phone:</span> +91 8857069147
              </li>
              <li>
                <span className="font-medium">✉️ Email:</span>
                ssfberries@gmail.com
              </li>
              {/* <li>
                <span className="font-medium">📍 Address:</span>
                <p className="leading-relaxed">
                SSF Farms 603 A Wing, Rupa Solitaire Building, Millennium business park, ​<br />Navi Mumbai Ghansoli, Maharashtra, India – 4000701
                </p>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-5 border-t border-pink-300/50">
          <span className="text-base text-gray-700 font-medium">
            © {new Date().getFullYear()}{" "}
            <span
              className="text-[#f5821f] font-bold"
              style={{ fontFamily: "'Cooper Black', serif" }}
            >
              SSF BERRIES
            </span>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;