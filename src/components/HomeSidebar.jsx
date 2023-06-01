import User from '../assets/images/user-profile/user.png'
import HighLogo from '../assets/images/navbar/high5mobile.png'

import { AiFillHome, AiFillGift } from 'react-icons/ai'
import { RiTeamFill, RiSurveyFill, RiUserVoiceFill } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import { HiSpeakerphone } from 'react-icons/hi'
import { BsQuestionCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Notification from './Notification'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function HomeSidebar({ }) {
  const showSidebar = useSelector((store) => store.sidebar)
  const dispatch = useDispatch()
  const setShowSidebar = (show) => dispatch({ type: 'sidebar', show })

  return (
<<<<<<< HEAD
    <div
      style={{ left: showSidebar ? '0px' : '' }}
      className={`transition-all py-3 pl-6 pr-4 lg:sticky lg:left-0 fixed -left-full lg:h-avoid-nav-lg lg:top-nav-lg h-avoid-nav top-nav lg:z-0 z-[999]`}
    >
      <div className="h-full overflow-y-auto z-30 bg-primary rounded-[9px] flex flex-col">
        <div className="border-b-2 border-[#7096DB] xxl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block px-5 pt-3">
          <div className="flex items-center justify-between ">
            <div className="mb-2 xxl:block xl:block lg:block md:block sm:block xs:block">
              <img className="h-12 mr-8" src={HighLogo} alt=" High Logo" />
            </div>
=======
    <>
      {/* backdrop */}
      {showSidebar && (
        <div
          style={{
            opacity: showSidebar ? '100%' : '',
          }}
          className="absolute inset-0 z-[999] bg-black bg-opacity-20 lg:hidden lg:opacity-100 opacity-0"
          onClick={() => setShowSidebar(false)}
        />
      )}
>>>>>>> bab84eb6ff3239b1ecd64bddb3b1be3986018a29

      {/* sidebar */}
      <div
        style={{ left: showSidebar ? '0px' : '' }}
        className="transition-all p-3 lg:sticky lg:left-0 fixed -left-full lg:h-avoid-nav-lg lg:top-nav-lg h-screen top-0 lg:z-0 z-[999] lg:w-auto w-[min(50vh,100%)]"
      >
        <div className="h-full overflow-y-auto z-30 bg-primary rounded-[9px] flex flex-col">
          <div className="border-b-2 border-[#7096DB] xxl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block px-5 pt-3">
            <div className="flex items-center justify-between ">
              <div className="mb-2 xxl:block xl:block lg:block md:block sm:block xs:block">
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
            <Link to="/" className="nav-item-container">
              <AiFillHome />
              <span>Home</span>
            </Link>
            <Link to="/my-rewards" className="nav-item-container">
              <AiFillGift />
              <span>My Rewards</span>
            </Link>
            <Link to="/" className="nav-item-container">
              <RiTeamFill />
              <span>My Team</span>
            </Link>
            <Link to="/" className="nav-item-container">
              <SiGoogleanalytics />
              <span>Analytics</span>
            </Link>
            <Link to="/" className="nav-item-container">
              <HiSpeakerphone />
              <span>Campaigns</span>
            </Link>
            <Link to="/survey" className="nav-item-container">
              <RiSurveyFill />
              <span>Survey</span>
            </Link>
            <Link to="/" className="nav-item-container">
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
    </>
  )
}
