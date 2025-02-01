import React from 'react'
import Sidebar from './Sidebar'
import { useAuth } from '../context/AuthProvider'
import VideoPlay from './Video'
import ListItem from './ListItem'

export default function Home() {
    const {data,loading} = useAuth()
    console.log(data)
  return (
    <div className='flex mt-16'>
        <Sidebar/>
        <div className='h-[calc(100vh-4.01rem)] overflow-y-scroll overflow-x-hidden'>
            <ListItem/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 mt-2'>
                {
                    !loading && data.map((item,indx) => {
                        if(item.type !== "video") {return false};
                        { return(<VideoPlay key={indx} video={item?.video}/>)}
                     })
                }
            </div>
        </div>
    </div>
  )
}
