
import { bgPageHeader, aboutBg, aboutImg } from '../../assets'
import Header from '../../Component/Header/Header'


export default function About() {
  return (
    <>
      <Header />
      <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
        backgroundImage: `url(${bgPageHeader})`
      }}>
        <h1 className='bg-white text-center w-fit p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>About us</h1>
      </div>

      <main>
        <div className='flex flex-col lg:flex lg:flex-row h-[30rem] border-2  gap-2' style={{ background: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),url(${aboutBg})` }} >
          <div className='flex-1 mx-auto self-center px-4'>
            <h2 className='text-2xl text-center lg:text-4xl lg:text-start'>Chairman Message</h2>
            <p className='text-justify px-4  leading-6 text-base  font-light mt-5 lg:px-0'>The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.</p>

          </div>
          <div className='flex-1 flex justify-center items-center' >
            <img src={aboutImg} alt='abt-image' className='w-[97%] h-[97%] rounded-md object-fill' />
          </div>
        </div>

        <div className='max-w-[1400px] mx-auto px-6'>
          <h2 className='text-2xl  my-4 leading-5 md:text-4xl'>Assalam-o-Alaikum</h2>
          <h3 className='text-[#0d6db7] mt-2 leading-5'>Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?</h3>
          <p className='font-light mt-4 mb-9 md:mt-1'>( Surat Baqara, Verse 245 )</p>
          <p className='font-light text-justify'>
            It should be noted that Allah, who is in need of no one and nothing, instills upon his men to give Qarz-e-Hasana because it is in man’s nature to be frugal whilst spending his wealth. Allah speaks about qarz because it is returned and Allah promises that He will return the goodly loan by 70 folds. Allah conveys his message to the Muslim ummah through the Holy Prophet Muhammad prompting Muslims to spend their wealth in a certain way. He says,Oh children of Adam! Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich, who should not be stingy in spending their money on those worse off than themselves. Allah will not only take strict accountability from those people but He will also punish them accordingly. On the Day Of Judgement, the rich will be humiliated because they did not help the needy. The needy will complain to Allah and say that all those men on whom you graciously bestowed the rights of wealth showed negligence in its proper use; they were busy spending on themselves and forgot about us, the ones who needed it. Allah will reply to this and say: “I swear on my respect and glory! I will bring you closer to me and push them further away.
          </p>
          <p className='font-light mt-6 text-justify'>Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other donations to help us help those in need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the Day of Judgment.</p>
          <h3 className='text-[#0d6db7] mt-4 mb-2 leading-10'>Muhammad Bashir Farooqi</h3>
          <h3 className='font-light'>Chairman Saylani Welfare</h3>
        </div>

      </main>
    </>


  )
}
