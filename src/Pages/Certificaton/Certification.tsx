import { bgPageHeader } from '../../assets'
import Header from '../../Component/Header/Header'


export default function Certification() {
  return (
    <>
    <Header/>
    <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
      backgroundImage: `url(${bgPageHeader})`
    }}>
    <h2 className='bg-white text-center w-fit p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>Certification</h2>
    </div>
      </>
  )
}
