import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Media from "./Pages/Media/Media";
import Certification from "./Pages/Certificaton/Certification";
import Enroll from "./Pages/Enroll/Enroll";
import Protected from "./Protected";
import Admin from "./Pages/Admin/Admin";
import AdminLayout from "./Pages/Admin/AdminLayout";
import Login from "./Pages/Login/Login";
import AddSlider from './Pages/Admin/Slider/AddSlider';
import ViewSlider from "./Pages/Admin/Slider/ViewSlider";
import AddTeacher from "./Pages/Admin/Teacher/AddTeacher";
import ViewTeacher from "./Pages/Admin/Teacher/ViewTeacher";
import AddCourse from "./Pages/Admin/Course/AddCourse";
import ViewCourse from "./Pages/Admin/Course/ViewCourse";
import AddNews from "./Pages/Admin/News/AddNews";
import ViewNews from "./Pages/Admin/News/ViewNews";
import AddCertification from "./Pages/Admin/Certification/AddCertification";
import ViewCertification from "./Pages/Admin/Certification/ViewCertification";
import ViewRegistration from "./Pages/Admin/Registration/ViewRegistration";
import "./global.module.scss";

function App() {
  return (
    <>
      <section className="container w-full max-w-[1440px] mx-auto lg:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin"   element={<Protected Cmp={AdminLayout}/>}>
          <Route index element={<Admin/>}/>
          <Route path='add-slider' element={<AddSlider/>}/>
          <Route path='view-slider' element={<ViewSlider/>}/>
          <Route path='add-teacher' element={<AddTeacher/>}/>
          <Route path='view-teacher' element={<ViewTeacher/>}/>
          <Route path='add-course' element={<AddCourse/>}/>
          <Route path='view-course' element={<ViewCourse/>}/>
          <Route path='add-certification' element={<AddCertification/>}/>
          <Route path='view-certification' element={<ViewCertification/>}/>
          <Route path='add-news' element={<AddNews/>}/>
          <Route path='view-news' element={<ViewNews/>}/>
          <Route path='view-registration' element={<ViewRegistration/>}/>
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
