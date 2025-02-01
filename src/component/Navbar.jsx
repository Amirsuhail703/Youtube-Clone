import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { CgMathPlus } from "react-icons/cg";
import { HiOutlineBell } from "react-icons/hi";
import logo from '../../public/logo.png';
import profile from '../../public/profile.jpeg'
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilsContext';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const {isSidebar, setIsSideBar, mobileShow, setMobileShow} = useUtils();

  useEffect(()=>{
    console.log({isSidebar,mobileShow});
  },[isSidebar])

  const navigate = useNavigate()

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`)
      setSearchQuery("")
    }
  }

  const handleSideBar = () => {
    if(window.innerWidth <= 1280){
      setIsSideBar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSideBar(!isSidebar);
  }

  return (
    <div className='flex fixed z-10 bg-white top-0 w-[100%] justify-between px-6 py-2'>

      <div className='  flex items-center space-x-4'>
        <AiOutlineMenu className='text-xl cursor-pointer' onClick={handleSideBar} />
        <img src={logo}  className='w-28 cursor-pointer' />
      </div>

      <div className=' ml-28 flex items-center w-[45%]'>
        <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
          <input type="text" placeholder='Search' className='outline-none'
            onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} />
        </div>
        <button className='px-5 py-2 mr-4 bg-gray-200 border border-gray-400 rounded-r-full'
          onClick={() => searchQueryHandler("searchButton")}>
          <CiSearch className='text-2xl' />
        </button>
        <IoMdMic size={"42px"} className='mr-4 bg-gray-200  rounded-full p-2 hover:bg-gray-300 duration-200' />
      </div>

      <div className='  flex space-x-3 items-center'>
        <div className='cursor-pointer flex py-2   items-center w-28 justify-evenly font-semibold border rounded-full bg-gray-200 hover:bg-gray-300 duration-200 '>
          <CgMathPlus className='text-2xl' /> Create
        </div>
        <HiOutlineBell size={"44px"} className='cursor-pointer  p-2 hover:bg-gray-300 duration-300  rounded-full' />
        <Avatar src={profile} round={true} size='40' className='cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar
