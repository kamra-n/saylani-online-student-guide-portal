
export default function ViewCourse() {
  return (
    <>
    <div className="w-full shadow-md">
      <div className="h-100">
      <div className='mt-4 flex justify-center items-center'>

      <div className="bg-white  p-4 rounded-md w-4/5  mt-2  border-b-[10px] border-[blue-50] overflow-y-scroll">

<div className="relative shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
      <tr>
        <th scope="col" className="py-3 px-6">
          Course Name
        </th>
        <th scope="col" className="py-3 px-6">
          Course Description
        </th>
        <th scope="col" className="py-3 px-6">
          Course Duration
        </th>
        <th scope="col" className="py-3 px-6">
          Assign Teacher
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    <tr className="bg-white border-b text-black">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            name
            </th>
            <td className="py-4 px-6">
              name
            </td>
            <td className="py-4 px-6">
              name
            </td>
            <td className="py-4 px-6">
              name
            </td>
            <td className="py-4 px-6 flex gap-3">
              <button className="flex-1 bg-[#1e429f] border-none my-2 flex justify-center items-center text-white rounded-md p-2 cursor-pointer">

                Delete
              </button>
              <button className="flex-1 bg-green-600 border-none my-2 flex justify-center items-center text-white rounded-md p-2 cursor-pointer">
                
                Edit
              </button>
            </td>
          </tr>

      {/* {transection.map((data) => {
        return (
          <tr className="bg-white border-b text-black" key={data.id}>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
              {data.reason}
            </th>
            <td className="py-4 px-6">
              {data.type}
            </td>
            <td className="py-4 px-6">
              {data.amount}
            </td>
            <td className="py-4 px-6 text-xs">
              {data.date}
            </td>
            <td className="py-4 px-6">
              <button className="flex-1 bg-[#ff000080] border-none my-2 flex justify-center items-center text-white rounded-md p-1 cursor-pointer" onClick={()=>deleteTransection(data.id)}>
                Delete
              </button>
            </td>
          </tr>
        )
      })}

     */}
     </tbody>
  </table>
</div>
</div>
        </div>
      </div>
    </div>
  </>
  )
}
