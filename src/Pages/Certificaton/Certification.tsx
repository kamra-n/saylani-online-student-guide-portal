import { bgPageHeader } from '../../assets'
import Header from '../../Component/Header/Header'


export default function Certification() {
  return (
    <>
      <Header />
      <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
        backgroundImage: `url(${bgPageHeader})`
      }}>
        <h2 className='bg-white text-center w-fit p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>Certification</h2>
      </div>

      <div className='mt-5 flex flex-col justify-center items-center'>
        <input type='search' className='w-[50%] border border-[#8dc63f] transition-all hover:border-[#0d6db7] rounded-md ' />
        <button className='bg-[#0d6db7] text-white w-[50%] p-2 rounded-md mt-5 cursor-pointer'>Fetch Record</button>
        
      </div>
    </>
  )
}
