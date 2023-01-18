import { collection, deleteDoc, query, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../../firebase.config"

export default function ViewSlider() {
  // save sliderDAta in state
  type Sdata = {
    id: number,
    name: string,
    imageUrl: string
  }
  const [slidersData, setSlidersData] = useState<Sdata[]>([])

  // deleteSlider

  const deleteSlider = async (id: number) => {
    try {
      await deleteDoc(doc(db, "sliders", `${id}`));
      alert('data deleted')
    }
    catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {

    // get data but at once not a realtime data


    // const getData = async () => {
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "sliders"));
    //     querySnapshot.forEach((doc) => {
    //       setSlidersData((prev: any) => {
    //         let newArray = [...prev, doc.data()]

    //         return newArray
    //       })
    //     });
    //   }
    //   catch (e) {

    //     console.log(e)

    //   }
    // }


    // get realTime Updates

    const getRealTimeData = async () => {
      try {
        const q = query(collection(db, "sliders"));
        onSnapshot(q, (querySnapshot) => {
          const slidersArray: any = [];
          querySnapshot.forEach((doc) => {
            slidersArray.push(doc.data());
          });
          setSlidersData(slidersArray)
        });
      }
      catch (e) {

        console.log(e)

      }
    }


    // getData();
    getRealTimeData();
  }, [])

  console.log('slidersData', slidersData)

  return (
    <>
      <div className="w-full shadow-md">
        <div className="min-h-[100vh]">
          <div className='mt-4 flex justify-center items-center'>

            <div className="bg-white  p-4 rounded-md w-4/5  mt-2  border-b-[10px] border-[blue-50] overflow-y-scroll">

              <div className="relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Slider Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Slider Path
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {slidersData.length === 0 ? <tbody><tr><td className="flex justify-center items-center my-4">isLoading ......</td></tr></tbody> : <tbody>
                    {slidersData && slidersData?.map((eachSlider: Sdata) => {
                      return (
                        <tr className="bg-white border-b text-black" key={eachSlider?.id}>
                          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                            {eachSlider?.name}
                          </th>
                          <td className="py-4 px-6">
                            <img src={eachSlider?.imageUrl} alt='sliderImage' height='100px' width='100px' />
                          </td>
                          <td className="py-4 px-6">
                            <button className="flex-1 bg-[#ff000080] border-none my-2 flex justify-center items-center text-white rounded-md p-1 cursor-pointer" onClick={() => deleteSlider(eachSlider.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>}

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
