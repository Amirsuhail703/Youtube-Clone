import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

function SearchCard({ video }) {
    console.log(video)
    return (
        <div>
            <Link to={`/video/${video?.videoId}`} >
                <div className='flex flex-col md:flex-row mb-6 md:mb-3 md:p-4'>
                    {/* thumbnails & time */}
                    <div className='relative flex h-48 w-48 md:w-80'>
                        <img className='h-full w-full rounded-lg object-cover' src={video?.thumbnails[0]?.url} />
                        {video?.lengthSeconds && <Time Time={video?.lengthSeconds} />}
                    </div>

                    <div className='flex flex-col ml-4 mr-10 md:ml-6 mt-4 md:mt-0 overflow-hidden'>
                        <span className='text-lg  md:text-2xl font-semibold line-clamp-2'>{video?.title}</span>
                        <span className='empty:hidden text-sm line-clamp-1 md:line-clamp-2 md:pr-24 md:my-4'>
                            {video?.descriptionSnippet}</span>
                        {/* channel logo & title */}
                        <div className=' hidden md:flex items-center '>
                            <div className='flex items-start mr-3 '>
                                <div className='flex  h-9 w-9 rounded-full overflow-hidden border'>
                                    <img className='h-full w-full object-cover' src={video?.author?.avatar[0].url} alt="" />
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                {/* <span className='text-lg md:text-2xl font-bold line-clamp-2'>{video?.title}</span> */}
                                <span className='text-sm font-semibold mt-2 flex item-center text-gray-600'>{video?.author?.title} {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" &&
                                    (<BsFillCheckCircleFill className=' text-[12px] lg:text-[10px] xl:text-[12px] text-gray-600 ml-3' />)}</span>
                                <div className='flex flex-sm font-semibold truncate overflow-hidden text-gray-600 text-xs'>
                                    <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
                                    <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1 '>.</span>
                                    <span className='truncate'>{video?.publishedTimeText}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SearchCard
