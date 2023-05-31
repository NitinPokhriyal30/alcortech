import * as React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FcMenu } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import alcoreLogo from '../assets/images/navbar/alcor-logo.png'
import HighLogo from '../assets/images/navbar/high5.png'
import Notification from './Notification'

export default function MainNavbar() {
  const showSidebar = useSelector((store) => store.sidebar)
  const dispatch = useDispatch()
  const setShowSidebar = (show) => dispatch({ type: 'sidebar', show })

  return (
    <div>
      <nav className="block fixed top-0 z-10 w-full xxl:py-[10px] xl:py-[10px] lg:py-[10px] md:py-[10px] sm:py-[11px] xs:py-[11px] bg-white shadow">
        <div className="mx-auto lg:max-w-7xl justify-evenly  md:items-center md:flex sm:flex xs:flex items-center h-full">
          <div className="flex items-center xl:gap-4 lg:gap-4 md:gap-4 sm:gap-4 xs:gap-0">
            <div>
              <button
                type="button"
                className="block lg:hidden  rounded-full p-2 hover:bg-translucent"
                onClick={() => setShowSidebar((p) => !p)}
              >
                <FcMenu fontSize={20} />
              </button>
            </div>
            <div className="flex w-full items-center justify-between xxl:block xl:block lg:block md:block sm:hidden xs:hidden">
              <a href="javascript:void(0)">
                <h2 className="text-2xl font-bold">
                  <img className="h-12" src={alcoreLogo} alt="alcore-logo" />
                </h2>
              </a>
            </div>

            <div className="w-full xxl:ml-8 xl:ml-8 lg:ml-8 md:ml-8 sm:ml-8 xs:ml-2  flex items-center justify-center _bg-red-500 bg-translucent _bg-[#F7F7F7] focus-within:bg-white rounded-[20px]">
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
                    className="xxl:w-96 xl:w-96 lg:w-96 md:w-[22rem] sm:w-96 xs:w-70  py-1 text-base font-Lato text-[#ACACAC] bg-transparent rounded-[20px] pl-10 focus:outline-none focus:text-gray-900"
                    placeholder="Search Users, Mentioned, Hashtags…"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className=" xxl:ml-auto xl:ml-auto lg:ml-auto md:ml-auto sm:ml-3 xs:ml-3 flex justify-between items-center gap-10">
            <div className="xxl:block xl:block lg:block md:block sm:hidden xs:hidden">
              <Notification />
            </div>

            <div className="mb-2 xxl:block xl:block lg:block md:block sm:block xs:block">
              <img
                className="h-12 xxl:h-12 xl:h-12 lg:h-12 md:h-12 sm:h-auto xs:h-auto xxl:mr-8 xl:mr-8 lg:mr-8 md:mr-8 sm:mr-4 xs:mr-4 "
                src={HighLogo}
                alt=" High Logo"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
