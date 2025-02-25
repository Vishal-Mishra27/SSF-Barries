import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Footer from "./component/Footer";
import Gallary from "./component/Gallary";
import FrozenCherry from "./component/FrozenCherry";
import FrozenPulp from "./component/FrozenPulp";

function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/frozenCharry" element={<FrozenCherry />} />
          <Route path="/frozenPulp" element={<FrozenPulp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
