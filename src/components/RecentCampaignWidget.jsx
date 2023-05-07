import * as React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import BloodDonation from '../assets/images/right-section/blood.png'

export default function RecentCampaignWidget({ ...props }) {
  return (
    <div>
      <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
        <div className="border-b border-[#EDEDED] py-1 px-3">
          <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
            Recent Campaigns
          </p>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div>
              <div className="flex items-top gap-3 pb-2 justify-between">
                <div>
                  <img src={BloodDonation} alt="Blood Donation" />
                </div>
                <div>
                  <p className="text-[16px] leading-[18px] pb-1 text-[#050505] font-Lato font-bold ">
                    Campaigns heading goes here…
                  </p>
                  <p className="text-[12px] leading-[15px] font-Lato font-medium text-[#939393]">
                    Owner: John Doe
                  </p>
                  <p className="text-[12px] leading-[15px] font-Lato font-medium text-[#939393]">
                    26/09/2019 - 25/10/2019
                  </p>
                  <p className="text-[14px] flex items-end leading-[17px] font-Lato font-medium text-[#5486E3]">
                    Participate
                    <span>
                      <BiChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-2 border-t border-[#EDEDED]">
            <p className="text-[12px] flex gap-1 justify-center items-center font-Lato text-primary font-bold">
              View All
              <span>
                <AiOutlineCaretDown />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
