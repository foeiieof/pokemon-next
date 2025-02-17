"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { IoChatbubbleEllipses } from 'react-icons/io5'

const Navbar = () => {
  const router = useRouter()
  const OnNav = () => router.push('/')
  return (
    <nav className="z-50 w-full bg-transparent h-[55px] flex flex-row justify-between items-center px-[15px] fixed">
      <div
        onClick={() => (OnNav())}
        className="hover:border cursor-pointer w-[40px] h-[40px] flex flex-col justify-center items-center bg-[#f4f4f4] rounded-full">
        <BiHomeAlt color="#232323" size={23} />
      </div>
      <div className="w-[40px] h-[28px] flex flex-col justify-center items-center bg-[#f4f4f4] rounded-full">
        <IoChatbubbleEllipses
          color="#7e7e7e" size={18} />
      </div>

    </nav>
  )
}
export default Navbar
