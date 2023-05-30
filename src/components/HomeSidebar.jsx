import User from '../assets/images/user-profile/user.png'
import HighLogo from '../assets/images/navbar/high5mobile.png'

import { AiFillHome, AiFillGift } from 'react-icons/ai'
import { RiTeamFill, RiSurveyFill, RiUserVoiceFill } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import { HiSpeakerphone } from 'react-icons/hi'
import { BsQuestionCircle } from 'react-icons/bs'
import useMediaQuery from '@mui/material/useMediaQuery'
import { breakpoints, myTheme } from '../myTheme'
import { Link } from 'react-router-dom'
import Notification from './Notification'

export default function HomeSidebar({ showSidebar, setShowSidebar }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)

  const headerHeight = isMd ? myTheme.header.md.height : myTheme.header.height

  return (
    <div
      style={{
        top: headerHeight + 'px',
        left: isMd ? '0px' : showSidebar ? '-12px' : '-100%',
        height: `calc(100vh - ${headerHeight}px)`,
        position: isMd ? 'sticky' : 'fixed',
        zIndex: "999"
      }}
      className="p-3 "
    >
      <div className="h-full overflow-y-auto z-30 bg-primary rounded-[9px] flex flex-col">
        <div className='border-b-2 border-[#7096DB] xxl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block px-5 pt-3'>
          <div className='flex items-center justify-between '>
            <div className='mb-2 xxl:block xl:block lg:block md:block sm:block xs:block'>
              <img className="h-12 mr-8" src={HighLogo} alt=" High Logo" />
            </div>

            <div>
              <Notification />
            </div>
          </div>
        </div>
        {/*------------- Profile  ----------------------*/}

        <div className="flex items-center gap-3 border-b-2 border-[#7096DB] xxl:p-5 xl:p-5 lg:p-5 md:p-5 sm:py-3 xs:py-3 ">
          <div>
            <img src={User} alt="user avatar" />
          </div>
          <div>
            <p className="text-white font-Lato text-[16px] font-black">Hi</p>
            <span className="text-white font-Lato text-[16px] font-normal">Semad Javed</span>
          </div>
        </div>

        {/*-------------- Nav Items  -------------------*/}

        <div className="flex flex-col px-1 pt-5">
          <Link to="/" className='nav-item-container'>
            <AiFillHome />
            <span>Home</span>
          </Link>
          <Link to="/my-rewards" className='nav-item-container'>
            <AiFillGift />
            <span>My Rewards</span>
          </Link>
          <Link to="/" className='nav-item-container'>
            <RiTeamFill />
            <span>My Team</span>
          </Link>
          <Link to="/" className='nav-item-container'>
            <SiGoogleanalytics />
            <span>Analytics</span>
          </Link>
          <Link to="/" className='nav-item-container'>
            <HiSpeakerphone />
            <span>Campaigns</span>
          </Link>
          <Link to="/survey" className='nav-item-container'>
            <RiSurveyFill />
            <span>Survey</span>
          </Link>
          <Link to="/" className='nav-item-container'>
            <RiUserVoiceFill />
            <span>Voice Out</span>
          </Link>
        </div>

        {/*--------------- FAQ Section  ----------------*/}

        <div className="mt-auto px-5 pt-16 pb-5">
          <div className="flex gap-3 items-center justify-between">
            <p className="text-white font-Lato font-light text-[16px] flex items-center gap-1 leading-[19px]">
              <BsQuestionCircle /> FAQs
            </p>
            <p className="text-white font-Lato font-light text-[16px] flex items-center gap-1 leading-[19px]">
              <BsQuestionCircle /> Feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
