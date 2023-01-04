import Topbar from "./Topbar"
import Sidebar from "./Sidebar"
export default function Admin() {
  //TODO STYLING LEFT

  return (
    <>
     <Topbar title='Admin Panel'/>
      <div className="grid grid-cols-[300px,1fr] mt-2 h-[95vh] shadow-md">
        <Sidebar />
        <div className=" text-center h-100">
          <div className='w-full flex mt-3 gap-6'>
            <div className='flex-1 rounded-lg border-2 h-72'>Box1</div>
            <div className='flex-1 rounded-lg border-2 h-72'>Box2</div>
          </div>
        </div>
      </div>
    </>

  )
}
