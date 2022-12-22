import Header from "./Component/Header/Header";
import HeroSection from "./Component/HeroSection/HeroSection";
import CourseSection from "./Component/Course-section/CourseSection";

import "./global.module.scss";

function App() {
  return (
    <>
      <Header />
    <section className="container w-full max-w-[1440px] mx-auto lg:px-20">

      <main>
        <HeroSection />

        <CourseSection />

      </main>
    </section>
    </>
  );
}

export default App;
