import * as React from 'react'

import FadeStar from '../assets/svg/fade.svg'
import GreenStar from '../assets/svg/green.svg'
import RedStar from '../assets/svg/red.svg'
import User1 from '../assets/images/user-profile/user.png'

export default function Top5UserWidget({ ...props }) {
  return (
    <div>
      <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
        <div className="border-b border-[#EDEDED] py-1 px-3">
          <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
            Top High5 Stars
          </p>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div className="flex pb-2 gap-3 ml-3 justify-between items-center">
              <div className="flex relative items-center gap-3">
                <img src={User1} alt="user1" />
                <img src={GreenStar} alt="Green Star" className="absolute top-0 left-[-15px]" />
                <div>
                  <p className="text-[14px] font-Lato font-normal text-[#050505]">Sunita Gulia</p>
                </div>
              </div>

              <div>
                <span className="text-[#B7B7B7] text-[12px]">21</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div className="flex pb-2 gap-3 ml-3 justify-between items-center">
              <div className="flex relative items-center gap-3">
                <img src={User1} alt="user1" />
                <img src={FadeStar} alt="Fade Star" className="absolute top-0 left-[-15px]" />
                <div>
                  <p className="text-[14px] font-Lato font-normal text-[#050505]">Sunita Gulia</p>
                </div>
              </div>

              <div>
                <span className="text-[#B7B7B7] text-[12px]">21</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div className="flex pb-2 gap-3 ml-3 justify-between items-center">
              <div className="flex relative items-center gap-3">
                <img src={User1} alt="user1" />
                <img src={RedStar} alt="Red Star" className="absolute top-0 left-[-15px]" />
                <div>
                  <p className="text-[14px] font-Lato font-normal text-[#050505]">Sunita Gulia</p>
                </div>
              </div>

              <div>
                <span className="text-[#B7B7B7] text-[12px]">21</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div className="flex pb-2 gap-3 ml-3 justify-between items-center">
              <div className="flex relative items-center gap-3">
                <img src={User1} alt="user1" />

                <div>
                  <p className="text-[14px] font-Lato font-normal text-[#050505]">Sunita Gulia</p>
                </div>
              </div>

              <div>
                <span className="text-[#B7B7B7] text-[12px]">21</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div className="flex pb-2 gap-3 ml-3 justify-between items-center">
              <div className="flex relative items-center gap-3">
                <img src={User1} alt="user1" />

                <div>
                  <p className="text-[14px] font-Lato font-normal text-[#050505]">Sunita Gulia</p>
                </div>
              </div>

              <div>
                <span className="text-[#B7B7B7] text-[12px]">21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
