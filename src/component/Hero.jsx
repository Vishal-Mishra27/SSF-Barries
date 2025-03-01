import React from "react";
import Logo from "../assets/ssfLogo.png";

const CenteredImage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-100  scroll-smooth"
      id="home"
    >
      <img
        src={Logo}
        alt="Berries Logo"
        className="md:max-w-full md:max-h-full object-contain"
      />
    </div>
  );
};

export default CenteredImage;
