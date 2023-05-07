import * as React from 'react'

export default function SurveyOngoingWidget({ ...props }) {
  return (
    <div>
      <div className=" pt-1 pb-3 rounded-[9px] bg-white drop-shadow-[0px_2px_3px_#00000029]">
        <div className="border-b border-[#EDEDED] py-1 px-3">
          <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
            Ongoing Survey
          </p>
          <span className="text-[12px] font-Lato font-normal text-[#A7A7A7] flex justify-center">
            Take surveys and get High5 points
          </span>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div>
              <div className="flex items-top pb-2 justify-between">
                <div>
                  <p className="text-[14px] text-[#5486E3] font-Lato font-normal">
                    Survey Title goes here
                  </p>
                  <span className="text-[14px] text-[#9F9F9F] font-Lato font-light">
                    3 days left | <strong> 20 Points</strong>
                  </span>
                </div>
                <div>
                  <p className="text-[14px] text-[#5486E3] font-Lato font-normal border-b border-[#5486E3]">
                    Take Now
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-top pb-2 justify-between">
                <div>
                  <p className="text-[14px] text-[#5486E3] font-Lato font-normal">
                    Survey Title goes here
                  </p>
                  <span className="text-[14px] text-[#9F9F9F] font-Lato font-light">
                    3 days left | <strong> 20 Points</strong>
                  </span>
                </div>
                <div>
                  <p className="text-[14px] text-[#5486E3] font-Lato font-normal border-b border-[#5486E3]">
                    Take Now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
