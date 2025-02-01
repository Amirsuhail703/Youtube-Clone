import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

function SuggestionVideo({video}) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
       <div className='flex mb-1'>
        {/* thumbnails & time */}
         <div className='relative h-24 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden'>
            <img className='h-full w-full ' src={video?.thumbnails[0]?.url} />
            {video?.lengthSeconds && <Time Time={video?.lengthSeconds} />}
         </div>

        {/* channel logo & title */}
         <div className='flex space-x-2 mt-3'>
              {/* <div className='flex items-start '>
                <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
                  <img className='h-full w-full rounded-full overflow-hidden' src={video?.author?.avatar[0].url} alt="" />
                </div>
              </div> */}
            <div className='ml-3'>
                <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>  
                <span className='flex items-center text-xs mt-2 font-semibold text-gray-600'>{video?.author?.title} {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && 
                (<BsFillCheckCircleFill className='text-gray-600 ml-3'/>)}</span> 
                <div className='flex text-gray-600 text-xs'>
                  <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
                  <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1 '>.</span>
                  <span>{video?.publishedTimeText}</span>
                </div>          
            </div>
         </div>         
       </div>
      </Link> 
    </div>
  )
}

export default SuggestionVideo
