import { AiOutlineCaretDown } from 'react-icons/ai'
import { TbChartCircles } from 'react-icons/tb'
import { MdOutlineCake, MdOutlineCelebration } from 'react-icons/md'

import AmazonLogo from '../assets/images/right-section/Amazon-Logo.png'
import DunkinLogo from '../assets/images/right-section/dunkin-logo.png'
import StarbucksLogo from '../assets/images/right-section/starbucks-logo.png'
import Top5UserWidget from './Top5UserWidget'
import RecentCampaignWidget from './RecentCampaignWidget'
import SurveyOngoingWidget from './SurveyOngoingWidget'

const RightSidebar = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] md:w-[350px] xl:w-[300px] ">
        <div>
          <div className="bg-[#E0EBFF] text-center px-5 pt-3 pb-1 rounded-[9px] drop-shadow-[0px_2px_3px_#00000029]">
            <p className="text-[20px] font-light text-center font-Lato leading-5 text-primary">
              You have <span className="font-black"> 390 Points</span> to redeem
            </p>
            <span className="text-[12px] text-[#747474] font-Lato font-light">
              Don't worry, It never expires!
            </span>
          </div>
        </div>
        <div>
          <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
            <div className="border-b border-[#EDEDED] py-1 px-3">
              <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
                Recommended for you
              </p>
            </div>
            <div>
              <div className="flex px-3 py-2 justify-between items-center">
                <div className="border-r border-[#EDEDED] py-4 pr-5">
                  <img src={AmazonLogo} alt="Amazon Logo" />
                </div>
                <div className="border-r border-[#EDEDED] py-4 pr-5">
                  <img src={DunkinLogo} alt="Dunkin Logo" />
                </div>
                <div>
                  <img src={StarbucksLogo} alt="Starbucks Logo" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[12px] flex justify-center items-center font-Lato text-primary font-bold">
                View All
                <span>
                  <AiOutlineCaretDown />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
            <div className="border-b border-[#EDEDED] py-1 px-3">
              <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
                Celebration
              </p>
            </div>
            <div>
              <div className=" px-3 pt-2 ">
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <MdOutlineCake />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Classie & 3 others</strong> birthday today
                  </span>
                </div>
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <MdOutlineCelebration />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Vikash & 1 other</strong> work anniversary
                  </span>
                </div>
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <TbChartCircles />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Jyoti & 2 other</strong> join today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
            <div className="border-b border-[#EDEDED] py-1 px-3">
              <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
                Top High5 Stars
              </p>
            </div>
            <div>
              <div className=" px-3 pt-2 ">
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <MdOutlineCake />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Classie & 3 others</strong> birthday today
                  </span>
                </div>
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <MdOutlineCelebration />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Vikash & 1 other</strong> work anniversary
                  </span>
                </div>
                <div className="flex pb-2 gap-3">
                  <p className="text-primary">
                    <TbChartCircles />
                  </p>
                  <span className="text-primary text-[12px] font-Lato font-light">
                    <strong>Jyoti & 2 other</strong> join today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Top5UserWidget />

        <SurveyOngoingWidget />

        <RecentCampaignWidget />
      </div>
    </div>
  )
}

export default RightSidebar
