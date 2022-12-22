import { cardImageOne, cardImageTwo, cardImageThree } from '../../assets'
export default function CoursesDetailSection() {
    const date = new Date();
    // console.log(date)
    const COURSE_DATA: any = [{
        courseid: 1,
        img: cardImageOne,
        coursename: 'web and mobile app development',
        date: date

    },
    {
        courseid: 2,
        img: cardImageTwo,
        coursename: 'Graphics Designing',
        date: date

    }
        ,
    {
        courseid: 3,
        img: cardImageThree,
        coursename: 'Cisco CNC',
        date: date

    }
    ]

    type CardsData = {
        courseid: number,
        img: string,
        coursename: string,
        date: string
    }

    let cardsData = COURSE_DATA.map((v: CardsData) => {
        return (
            <div className='card h-auto w-[300px] rounded-lg bg-[#eeeeee]' key={v.courseid}>
                <img src={v.img} alt='image' className='rounded-lg' />
                <div>
                    <p className='bg-[#8dc63f] text-xs w-fit text-white rounded-lg p-2 my-4 mx-3'>11 tuesday 2019</p>
                    <p className='break-before-auto px-5'>{v.coursename}</p>
                </div>
                <div className='flex gap-2 px-2 py-2 items-center'>
                    <button className='border-none py-2 bg-[#0d6db7] text-white w-[140px] rounded-md'>View Details</button>
                    <button className='border-none py-2 bg-[#8dc63f] text-white  w-[140px] rounded-md'>Enroll Now</button>

                </div>
            </div>
        )
    })
    return (
        <>
            <div className="mt-6 md:mt-10 text-center lg:mt-36 lg:text-left">
                <h2 className=" text-3xl lg:text-4xl font-semibold">Courses We Offered</h2>
                <div className="block w-60 h-1 bg-[#0d6db7] mt-2 ml-10 md:ml-40 lg:ml-7"></div>
            </div>

            <div className="cards gap-4 mt-7  flex flex-col items-center lg:flex lg:flex-row lg:justify-around py-5">
                {/* <div className='card h-auto w-[300px] rounded-lg bg-[#eeeeee]'>
                    <img src={cardImageOne} alt='image' className='rounded-lg' />
                    <div>
                        <p className='bg-[#8dc63f] text-xs w-fit text-white rounded-lg p-2 my-4 mx-3'>Thu Dec 15 2022</p>
                        <p className='break-before-auto px-5'>Saylani Welfare International Trust | Bank Alfalah...</p>
                    </div>
                    <div className='flex gap-2 px-2 py-2 items-center'>
                        <button className='border-none py-2 bg-[#0d6db7] text-white w-[140px] rounded-md'>View Details</button>
                        <button className='border-none py-2 bg-[#8dc63f] text-white  w-[140px] rounded-md'>Enroll Now</button>

                    </div>
                </div> */}
                {cardsData && cardsData}
            </div>
        </>
    )
}
