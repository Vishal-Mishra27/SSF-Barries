import React from 'react'
import Contact from "./Contact";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Gallary from "./Gallary.jsx";
import FrozenCherry from "./FrozenCherry";
import FrozenPulp from "./FrozenPulp";
import Feedback from "./Feedback";
import Services from "./Services";
import RealFruit from "./RealFruit";
import SSfFarm from "./SSfFarm";
import RedBerry from "./RedBerry";
import OffersStraberries from "./OffersStraberries";
import OffersRaspberries from "./OffersRaspberries";
import Weprovide from "./Weprovide";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <RealFruit></RealFruit>
      <SSfFarm></SSfFarm>
      <RedBerry></RedBerry>
      <OffersStraberries></OffersStraberries>
      <OffersRaspberries />
      <Weprovide />
      <Services></Services>
      <Feedback></Feedback>
      <Contact></Contact>
      <Footer />
    </div>
  );
}
