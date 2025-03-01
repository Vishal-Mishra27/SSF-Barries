import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Footer from "./component/Footer";
import Gallary from "./component/Gallary.jsx";
import FrozenCherry from "./component/FrozenCherry";
import FrozenPulp from "./component/FrozenPulp";
import Feedback from "./component/Feedback";
import Services from "./component/Services";
import RealFruit from "./component/RealFruit";
import SSfFarm from "./component/SSfFarm";
import RedBerry from "./component/RedBerry";
import OffersStraberries from "./component/OffersStraberries";
import OffersRaspberries from "./component/OffersRaspberries";
import Weprovide from "./component/Weprovide";
import Hero from "./component/Hero"
function App() {
  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<Gallary />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
