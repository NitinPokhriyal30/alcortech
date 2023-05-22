import * as React from 'react'
import { CiSearch } from 'react-icons/ci'
import alcoreLogo from '../assets/images/navbar/alcor-logo.png'
import NotificationBell from '../assets/images/navbar/notinfication.png'
import HighLogo from '../assets/images/navbar/high5.png'
import { breakpoints, myTheme } from '../myTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import { FcMenu } from 'react-icons/fc'

export default function MainNavbar({ setShowSidebar }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)

  const headerHeight = isMd ? myTheme.header.md.height : myTheme.header.height

  return (
    <div
      style={{
        height: headerHeight + 'px',
      }}
    >
      <nav
        style={{
          height: headerHeight + 'px',
        }}
        className="block fixed top-0 z-10 w-full bg-white shadow"
      >
        <div className="mx-auto lg:max-w-7xl  md:items-center md:flex sm:flex xs:flex items-center h-full">
          <div className="flex items-center xl:gap-4 lg:gap-4 md:gap-4 sm:gap-4 xs:gap-0">
            <button
              type="button"
              className="block md:hidden  rounded-full p-2 hover:bg-translucent"
              onClick={() => setShowSidebar((p) => !p)}
            >
              <FcMenu fontSize={20} />
            </button>

            <div className="flex items-center justify-between">
              <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold">
                  <img className="h-12" src={alcoreLogo} alt="alcore-logo" />
                </h2>
              </a>
            </div>


            <div className="xxl:ml-8 xl:ml-8 lg:ml-8 md:ml-8 sm:ml-8 xs:ml-2  flex items-center justify-center _bg-red-500 bg-translucent _bg-[#F7F7F7] focus-within:bg-white rounded-[20px]">
              <form>
                <div className="relative text-gray-600 focus-within:text-gray-400 rounded-[20px]">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <CiSearch className="text-[#ACACAC]" />
                    </button>
                  </span>
                  <input
                    type="search"
                    name=""
                    className="xxl:w-96 xl:w-96 lg:w-96 md:w-[22rem] sm:w-96 xs:w-56  py-1 text-base font-Lato text-[#ACACAC] bg-transparent rounded-[20px] pl-10 focus:outline-none focus:text-gray-900"
                    placeholder="Search Users, Mentioned, Hashtags…"
                  />
                </div>
              </form>
            </div>

          </div>

          <div className=" xxl:ml-auto xl:ml-auto lg:ml-auto md:ml-auto sm:ml-3 xs:ml-3 flex justify-between items-center gap-10">
            <div>
              <li className="font-sans block  xxl:mt-2 xl:mt-2 lg:mt-2 md:mt-0 sm:mt-0 xs:mt-0  lg:inline-block  lg:ml-6 align-middle text-black hover:text-gray-700">
                <a href="#" role="button" className="relative flex">
                  <img src={NotificationBell} alt="Notification Bell" />
                  <span className="absolute right-2 top-2 rounded-full bg-[#E55E5E] w-3 h-3 top right p-0 m-0 text-white font-mono text-[10px]  leading-tight text-center">
                    5
                  </span>
                </a>
              </li>
            </div>
            <div className='xxl:block xl:block lg:block md:block sm:hidden xs:hidden'>
              <img className="h-12 mr-8" src={HighLogo} alt=" High Logo" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
