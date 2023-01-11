import CourseSection from "../../Component/Course-section/CourseSection"
import HeroSection from "../../Component/HeroSection/HeroSection"
import Header from "../../Component/Header/Header"
export default function Home() {
    return (
        <>
      <Header />

      <main>
            <HeroSection />

            <CourseSection />

        </main>
        </>
        
    )
}
