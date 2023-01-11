import { bgPageHeader } from '../../assets'
import Header from '../../Component/Header/Header'


export default function Contact() {
  //TODO RESPONSIVE WORK LEFT
  return (
    <>
      <Header />
      <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
        backgroundImage: `url(${bgPageHeader})`
      }}>
        <h2 className='bg-white text-center w-fit p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>Contact us</h2>
      </div>

      <main className='mt-5 flex flex-wrap flex-col md:flex md:flex-row justify-center gap-6 w-full'>
        <div className='flex-auto px-4 '>
          <form className='flex flex-col justify-center items-center md:justify-start md:items-stretch'>
            <div className='flex flex-col md:flex md:flex-row gap-3 '>
              <div className='flex-1 flex flex-col w-[92vw] md:w-full'>
                <label className='text-[#0d6db7]' htmlFor='name'>Name</label>
                <input type='text' className='border border-[#8dc63f] transition-all hover:border-[#0d6db7] rounded-md' id='name' />
              </div>

              <div className='flex-1 flex flex-col w-[92vw] md:w-full'>
                <label className='text-[#0d6db7]' htmlFor='email'>Email</label>
                <input type='email' className='border border-[#8dc63f] transition-all hover:border-[#0d6db7] rounded-md' id='email' />
              </div>
            </div>

            <div className='flex flex-col mt-5 w-[92vw] md:w-full'>
              <label className='text-[#0d6db7]' htmlFor='subject'>subject</label>
              <input type='text' className='w-full border border-[#8dc63f] transition-all hover:border-[#0d6db7] rounded-md' id='subject' />
            </div>

            <div className='flex flex-col mt-5  w-[92vw] md:w-full'>
              <label className='text-[#0d6db7]' htmlFor='message'>
                Message
              </label>
              <textarea className='border w-full border-[#8dc63f] transition-all hover:border-[#0d6db7] rounded-md' id='message' />
            </div>

            <button className='bg-[#0d6db7] text-white w-full p-2 rounded-md mt-5'>Submit</button>

          </form>
        </div>

        <div className='flex-auto px-4'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.86223363387!2d67.068066!3d24.882664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66f953936852019b!2sSaylani%20Welfare%20Int.%20Trust!5e0!3m2!1sen!2sus!4v1673104855164!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "[0px]" }}
            loading="lazy"></iframe>
        </div>

      </main>
    </>
  )
}
