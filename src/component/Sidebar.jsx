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
import { useUtils } from '../context/UtilsContext';


function Sidebar() { 
  const {isSidebar,mobileShow,setMobileShow} = useUtils();

  const sidebarItems = [
    {
      groupName:"Home",
      groupItems:[ 
        {id: 1, icon: <HiOutlineHome/>, name:'Home'},
        {id: 2, icon: <SiYoutubeshorts/>, name:'Short'},
        {id: 3, icon: <MdOutlineSubscriptions/>, name:'Subscriptions'},
      ],
    },

    {
      groupName:"You",
      groupItems:[
        {id:1, icon: <MdHistory/>, name:'History'},
        {id:2, icon: <CgPlayList/>, name:'Playlists'},
        {id:3, icon: <MdOutlineWatchLater/>, name:'Watch later'},
        {id:4, icon: <BiLike/>, name:'Liked videos'},
      ],
    },

    {
      groupName:"Explore",
      groupItems:[
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
        {id:11, icon: <MdOutlinePodcasts/>, name:'Podcasts'},
      ],
    },

    {
      groupName:"More",
      groupItems:[
        {id:1, icon: <AiFillYoutube/>, name:'YouTube Premium'},
        {id:2, icon: <SiYoutubemusic/>, name:'YouTube Music'},
        {id:3, icon: <SiYoutubekids/>, name:'YouTube Kids'},
      ],
    },

    {
      groupName:"Setting",
      groupItems:[
        {id:1, icon: <SlSettings/>, name:'Settings'},
        {id:2, icon: <MdOutlineOutlinedFlag/>, name:'Report history'},
        {id:3, icon: <AiOutlineQuestionCircle/>, name:'Help'},
        {id:4, icon: <RiFeedbackLine/>, name:'Send feedback'},
      ],
    },
  ];
  
  const ModelOverlay = () => {
    return(
      <div className='flex fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-30' onClick={()=>setMobileShow(!mobileShow)}> </div>
    )
  }
//px-6 w-[50%] text-md font-medium bg-gray-50 h-[calc(100vh-3.25rem)] overflow-y-scroll overflow-x-hidden
  return (
    <>
    <div className={`${mobileShow?"fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[35%] sm:w-[35%] "
      :"hidden h-[calc(100vh-3.6rem)] w-[22%]"} xl: static xl:block px-2 overflow-y-scroll overflow-x-hidden`}>
      <div className='items-center space-y-3'>
        { sidebarItems.map((group)=>(  
              <div key={group.groupName} className='mt-1'>
                <h1 className='font-bold ml-4'>{group.groupName}</h1>
                  { group.groupItems.map((item)=>(
                      <div key={item.id} className='flex space-x-6 items-center cursor-pointer hover:bg-gray-300 duration-300 rounded-md py-2 mt-2'>
                        <div className='text-2xl cursor-pointer ml-4'>{item.icon}</div>
                        <span className='font-normal'>{item.name}</span>
                      </div>
                  ))}
                <hr className='mt-4'/>
              </div> 
           ))}        
      </div>

      {/*about */}
      <div className='text-sm ml-3  mt-3'>
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
    {mobileShow ? <ModelOverlay/> : null}
    </>
  )
}

export default Sidebar
