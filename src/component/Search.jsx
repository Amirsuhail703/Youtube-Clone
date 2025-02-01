import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidapi'
import Sidebar from './Sidebar'
import SearchCard from './SearchCard'

export default function Search() {
  const [result, setResult] = useState()
  const { searchQuery } = useParams()

  useEffect(() => {
    fetchSearchResult();
  }, [searchQuery])

  const fetchSearchResult = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents)
      setResult(contents)
    })
  }
  return (
    <div className=''>
      <div className=' mt-14 flex flex-row h-[calc(100%-60px)] '>
        <Sidebar />
        <div className='grow h-[calc(100vh-3.90rem)] overflow-y-scroll overflow-x-hidden'>
          <div className=' grid grid-col-1 gap-2 pl-2 pt-2'>
            {
              result?.map((item, indx) => {
                if (item?.type !== "video") return false;
                return <SearchCard key={indx} video={item?.video} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
