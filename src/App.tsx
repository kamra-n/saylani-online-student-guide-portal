import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Media from "./Pages/Media/Media";
import Certification from "./Pages/Certificaton/Certification";
import Enroll from "./Pages/Enroll/Enroll";
import Header from "./Component/Header/Header";
import Protected from "./Protected";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import AddSlider from "./Pages/Admin/AddSlider";

import "./global.module.scss";

function App() {
  return (
    <>
      <Header />
      <section className="container w-full max-w-[1440px] mx-auto lg:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Protected Cmp={Admin} />}>
          <Route path="addslider" element={<AddSlider />} />
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
