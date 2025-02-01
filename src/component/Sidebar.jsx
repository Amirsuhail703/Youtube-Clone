import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BiMovie } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { BiTrophy } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SlSettings } from "react-icons/sl";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";


// import { SiYoutubestudio } from "react-icons/si";
// import { SiYoutubemusic } from "react-icons/si";
// import { SiTrendmicro } from "react-icons/si";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { PiMusicNoteLight } from "react-icons/pi";
// import { PiFilmSlateLight } from "react-icons/pi";
// import { CgMediaLive } from "react-icons/cg";
// import { FaRegNewspaper } from "react-icons/fa";
// import { TfiCup } from "react-icons/tfi";
// import { PiLightbulbLight } from "react-icons/pi";
// import { SiStylelint } from "react-icons/si";
// import { MdPodcasts } from "react-icons/md";


function Sidebar() { 

  const menu = [ 
    {id: 1, icon: <HiOutlineHome/>, name:'Home'},
    {id: 2, icon: <SiYoutubeshorts/>, name:'Short'},
    {id: 3, icon: <MdOutlineSubscriptions/>, name:'Subscriptions'}
  ]

  const you = [
    {id:1, icon: <MdHistory/>, name:'History'},
    {id:2, icon: <CgPlayList/>, name:'Playlists'},
    {id:3, icon: <MdOutlineWatchLater/>, name:'Watch later'},
    {id:4, icon: <BiLike/>, name:'Liked videos'}
  ]

  const explore = [
    {id:1, icon: <FaFireAlt/>, name:'Trending'},
    {id:2, icon: <RiShoppingBag4Line/>, name:'Shopping'},
    {id:3, icon: <IoMusicalNotesOutline/>, name:'Music'},
    {id:4, icon: <BiMovie/>, name:'Movies'},
    {id:5, icon: <HiMiniSignal/>, name:'Live'},
    {id:6, icon: <SiYoutubegaming/>, name:'Gaming'},
    {id:7, icon: <MdNewspaper/>, name:'News'},
    {id:8, icon: <BiTrophy/>, name:'Sports'},
    {id:9, icon: <RiGraduationCapLine/>, name:'Courses'},
    {id:10, icon: <GiHanger/>, name:'Fashion & Beauty'},
    {id:11, icon: <MdOutlinePodcasts/>, name:'Podcasts'}
  ]

  const more =[
    {id:1, icon: <AiFillYoutube/>, name:'YouTube Premium'},
    {id:2, icon: <SiYoutubemusic/>, name:'YouTube Music'},
    {id:3, icon: <SiYoutubekids/>, name:'YouTube Kids'}
  ]

  const setting = [
    {id:1, icon: <SlSettings/>, name:'Settings'},
    {id:2, icon: <MdOutlineOutlinedFlag/>, name:'Report history'},
    {id:3, icon: <AiOutlineQuestionCircle/>, name:'Help'},
    {id:4, icon: <RiFeedbackLine/>, name:'Send feedback'}
  ]

  return (
    <div className=' px-6 w-[25%] text-sm font-medium bg-gray-50 h-[calc(100vh-3.25rem)] overflow-y-scroll overflow-x-hidden scrollbar-hide'>
      {/*Home */}
      <div className='items-center space-y-3'>
        {
          menu.map((item)=>{
            return(
              <div key={item.id} className='flex space-x-6 items-center cursor-pointer hover:bg-gray-300 duration-300 rounded-md p-1 mt-3'>
              <div className='text-xl'>{item.icon}</div>
              <span>{item.name}</span>
            </div>
            )
          })
        }        
      </div>
      <hr className='mt-4'/>

      {/*You */}
      <div className='items-center space-y-3'>
        <div className='mt-3 flex items-center font-bold space-x-3 space-y- cursor-pointer hover:bg-gray-300 duration-300 rounded-md p-1'>
          <h1>You</h1>
          <span className='text-sm'><FaChevronRight/></span>
        </div>
        {
          you.map((item)=>{
            return(
              <div key={item.id} className='flex space-x-6 items-center cursor-pointer hover:bg-gray-300 duration-300 rounded-md p-1'>
              <div className='text-xl'>{item.icon}</div>
              <span>{item.name}</span>
            </div>
            )
          })
        }        
      </div>
      <hr className='mt-4'/>

      {/*Explore */}
      <div className='items-center space-y-3'>
        <div className='mt-3 flex items-center space-x-3 font-bold'>
          <h1>Explore</h1>
        </div>
        {
          explore.map((item)=>{
            return(
              <div key={item.id} className='flex space-x-6 items-center cursor-pointer hover:bg-gray-300 duration-300 rounded-md p-1'>
              <div className='text-xl'>{item.icon}</div>
              <span>{item.name}</span>
            </div>
            )
          })
        }        
      </div>
      <hr className='mt-4'/>

      {/*More */}
      <div className='items-center space-y-3'>
        <div className='mt-3 flex items-center space-x-3 font-bold'>
          <h1>More from YouTube</h1>
        </div>
        {
          more.map((item)=>{
            return(
              <div key={item.id} className='flex space-x-6 items-center cursor-pointer hover:bg-gray-300 duration-300 rounded-md p-1'>
              <div className='text-xl text-red-500'>{item.icon}</div>
              <span>{item.name}</span>
            </div>
            )
          })
        }        
      </div>
      <hr className='mt-4'/>

      {/*setting */}
      <div className='items-center space-y-3'>
        {
          setting.map((item)=>{
            return(
              <div key={item.id} className='mt-3 flex space-x-6 items-center cursor-pointer hover:bg-gray-300 duration-300 rounded-md p-1'>
              <div className='text-xl'>{item.icon}</div>
              <span>{item.name}</span>
            </div>
            )
          })
        }        
      </div>
      <hr className='mt-4'/>

      {/*about */}
      <div className='text-sm mt-3'>
      <div className=' font-medium'> 
        <div>About Press Copyright</div>
        <div>Contact Us Creators</div>
        <div>Advertise Developers</div>
      </div>
      
      <div className='mt-3 font-medium'>
        <div>Terms Privacy Policy & Safety</div>
        <div>How YouTube works</div>
        <div>Test new features</div>
      </div>

      <div className='mt-3 text-sm pb-5 font-thin'>@ 2025 Google LLC</div>
      </div>

    </div>
  )
}

export default Sidebar
