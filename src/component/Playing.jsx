import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/rapidapi'
import ReactPlayer from 'react-player';
import { AiOutlineLike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';
import { BiDislike } from 'react-icons/bi';
import SuggestionVideo from './SuggestionVideo';

export default function Playing() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    })
  }

  const fetchRelatedVideo = () =>{
    fetchData(`video/related-contents/?id=${id}`).then((res)=>{
      console.log(res)
      setRelatedVideo(res)
    })
  }

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] mt-16 ml-32 '>
      <div className='w-full max-w-[1580px] flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-[calc(100%-500px)] xl:w-[100%-400px] px-4 py-3 lg:py-5'>
          <div className='h-[200px] md:h-[500px] ml-[-16px] mr-[-16px] lg:mr-0'>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              playing={true}
              style={{ backgroundColor: "#000000" }}
            />
          </div>
          <div>
            <h1 className='mt-3 text-2xl font-bold line-clamp-2'>{video?.title}</h1>
          </div>

          <div className='flex items-center'>
            <div className='flex flex-wrap'>
              <div className='flex items-center mt-3'>
                <div>
                  <img className='h-9 w-9 rounded-full overflow-hidden' src={video?.thumbnails[0].url} alt="" />
                </div>
                <div className='ml-3'>
                  <span className='flex font-bold '>{video?.author?.title} {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-600 ml-3' />)}</span>
                  <span>{`${abbreviateNumber(video?.publishedTimestamp, 2)} Subscribers`}</span>
                </div>
                <div>
                  <span className='ml-5 text-center bg-red-500 px-5 p-2 rounded-full text-white  cursor-pointer hover:bg-red-600'>Subscribe</span>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-2 ml-48 md:mt-0'>
              <div className='flex items-center justify-center h-9 px-4 rounded-3xl bg-gray-200'>
                <AiOutlineLike className='text-xl' /> {`${abbreviateNumber(video?.stats?.likes, 2)} |`}
                <BiDislike className='text-xl ' />
              </div>
              <div className='flex items-center justify-center h-9 px-4 rounded-3xl bg-gray-200'>
                {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
              </div>
            </div>
          </div>

          <div className='p-4 bg-gray-100 rounded-xl mt-4 text-sm'>
            {video?.description}
          </div>
          <div className='flex gap-x-6 font-semibold rounded-xl mt-4 text-xl'>
            {video?.stats?.comments}<p>Comments</p>
          </div>
        </div>
        <div className='flex flex-col px-4 py-6  lg:w-[400px] xl:[350px] '>
          {
            relatedVideo?.contents?.map((item,indx)=>{
              if(item?.type !== "video") return false;
              return <SuggestionVideo key={indx} video={item?.video}/>;
            })
          }
        </div>
      </div>
    </div>
  )
}
