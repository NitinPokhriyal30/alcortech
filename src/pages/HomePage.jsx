import Box from '@mui/material/Box'
import * as React from 'react'
import MainNavbar from '../components/MainNavbar'
import HomeSidebar from '../components/HomeSidebar'
import { breakpoints, myTheme } from '../myTheme'
import RightSidebar from '../components/RightSidebar'
import useMediaQuery from '@mui/material/useMediaQuery'

import Top5UserWidget from '../components/HomeRightSidebar/Top5UserWidget'
import RecentCampaignWidget from '../components/HomeRightSidebar/RecentCampaignWidget'
import SurveyOngoingWidget from '../components/HomeRightSidebar/SurveyOngoingWidget'
import RecommendationWidget from '../components/HomeRightSidebar/RecommendationWidget'
import CelebrationWidget from '../components/HomeRightSidebar/CelebrationWidget'
import NewPost from '../components/NewPost'

export default function HomePage({ ...props }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const [user, setUser] = React.useState({
    points: 290
  })

  return (
    <main
      style={{
        backgroundColor: myTheme.paper.backgroundColor,
      }}
    >
      <MainNavbar setShowSidebar={setShowSidebar} />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMd ? '270px 1fr auto' : '1fr auto',
        }}
      >
        <HomeSidebar {...{ showSidebar, setShowSidebar }} />
        <div style={{ height: '200vh' }} className="pt-3 pr-3">
          <NewPost />
        </div>

        <div className="pt-3 pr-4">
          <div className="flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] md:w-[350px] xl:w-[300px] ">
            <div>
              <div className="bg-[#E0EBFF] text-center px-5 pt-3 pb-1 rounded-[9px] drop-shadow-[0px_2px_3px_#00000029]">
                <p className="text-[20px] font-light text-center font-Lato leading-5 text-primary">
                  You have <span className="font-black">{user.points} Points</span> to redeem
                </p>
                <span className="text-[12px] text-[#747474] font-Lato font-light">
                  Don't worry, It never expires!
                </span>
              </div>
            </div>

            <RecommendationWidget />

            <CelebrationWidget />
            <Top5UserWidget />

            <SurveyOngoingWidget />

            <RecentCampaignWidget />
          </div>
        </div>
      </Box>
    </main>
  )
}
