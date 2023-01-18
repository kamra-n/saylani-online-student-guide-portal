import { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import axios from 'axios';


import { bgPageHeader } from '../../assets'
import Header from '../../Component/Header/Header'
import style from '../Media/meida.module.scss'


type t = {
  created_time: string,
  full_picture: string,
  message: string,
  id: string,
  permalink_url: string,
}
// const DATA = [{
//   id: 1,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 2,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 3,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 4,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 5,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 6,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 7,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 8,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 9,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 10,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 11,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 12,
//   image: bgPageHeader,
//   des: 'something'
// },
// {
//   id: 13,
//   image: bgPageHeader,
//   des: 'something'
// }, {
//   id: 14,
//   image: bgPageHeader,
//   des: 'something'
// }, {
//   id: 15,
//   image: bgPageHeader,
//   des: 'something'
// }, {
//   id: 16,
//   image: bgPageHeader,
//   des: 'something'
// }, {
//   id: 17,
//   image: bgPageHeader,
//   des: 'something'
// }
// ]


//TODO ADD DATE TO CORRECT FORMAT




export default function Media() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 6;
  const pagesVisited = pageNumber * postPerPage;


  // API_REQUEST


  useEffect(() => {
    axios.get('https://graph.facebook.com/v11.0/thiscoderisalive?fields=published_posts.limit(100){full_picture,message,created_time,permalink_url}&access_token=EAATVj1lCNtsBADWkehwaktMX4CsODUQgpP3eRg2aaz1Uy1h4ke1vj7im9GQr0moUzjiFJwolijpVby6kZCMju0SfmtUDE3qARtfhaZAL65cvj2ZCEJYZA7hA9bGVdMs3gNyhMOkZAjxjJWpspqDTF4p3ZA0CgKwTj4ZAJ9oVxPTaxJtZBNZBdz9mc')
      .then(function (response) {
        // handle success
        if (response) {
          setIsloading(false);
          setPostData(response.data.published_posts.data);
        }
        else {
          setIsloading(true)
        }
        console.log('response', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  const displayPosts = postData?.slice(pagesVisited, pagesVisited + postPerPage)




  const pageCount = Math.ceil(postData?.length / postPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <div className='w-full max-h-64 p-24 mt-2 bg-no-repeat bg-cover flex justify-center items-center' style={{
        backgroundImage: `url(${bgPageHeader})`
      }}>
        <h2 className='bg-white text-center w-fit p-4 rounded-md text-[#0d6db7] text-xl font-semibold'>Media</h2>
      </div>
      {displayPosts.length === 0 ? <div className='flex justify-center items-center text-2xl mt-6 md:text:4xl'><h2>Is Loading ............</h2></div> : <div className='mt-4 flex flex-wrap gap-4 justify-evenly'>
        {displayPosts.map((v: t) => {
          return (<div className="card  min-h-[450px] max-w-[300px] bg-[#eeeeee] p-4 rounded-md flex-auto cursor-pointer hover:translate-y-[-10px]  hover:ease-in-out" key={v.id} >
            <img className="w-full rounded-md h-[50%] object-cover" src={v.full_picture} alt="card-image" />
            <div className="p-2">
              <p className="text-sm bg-[#8DC63F] w-fit p-1 rounded-md text-white my-2 mx-2">
                {v.created_time}
              </p>
              <h2 className="p-2 text-base font-semibold text-ellipsis">{v?.message?.slice(0, 90)}</h2>
            </div>
            <button className="border-none bg-[#0d6db7] text-white w-[140px] p-1 rounded-md cursor-pointer flex-auto"><a href={v.permalink_url
            } target='_Blank' aria-label='post_Link'> View Full Post </a> </button>
          </div>)
        })}
      </div>}

      {displayPosts.length === 0 ? <div /> :

        <ReactPaginate previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={`${style.paginationBttns}`}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />

      }

    </>
  )
}
