import Header from './Component/Header/Header'
import HeroSection from './Component/HeroSection/HeroSection'

import './global.module.scss'


function App() {

  return (
    <section className='container w-full max-w-[1440px] mx-auto'>
       <Header />

      <main className='md:p-0 lg:px-20'>
        <HeroSection />
      </main>
      
    </section>

  )
}

export default App
