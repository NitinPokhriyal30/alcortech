import Box from '@mui/material/Box'
import * as React from 'react'
import MainNavbar from '../components/MainNavbar'
import HomeSidebar from '../components/HomeSidebar'
import { breakpoints, myTheme } from '../myTheme'
import useMediaQuery from '@mui/material/useMediaQuery'

import Top5UserWidget from '../components/HomeRightSidebar/Top5UserWidget'
import RecentCampaignWidget from '../components/HomeRightSidebar/RecentCampaignWidget'
import SurveyOngoingWidget from '../components/HomeRightSidebar/SurveyOngoingWidget'
import RecommendationWidget from '../components/HomeRightSidebar/RecommendationWidget'
import CelebrationWidget from '../components/HomeRightSidebar/CelebrationWidget'
import NewPost from '../components/NewPost'
import { RedeemPointsWidget } from '../components/HomeRightSidebar/RedeemPointsWidget'
// import ImageCarosel from '../components/ImageCarosel'

import slider1 from '../assets/slider/slider1.png'
import slider2 from '../assets/slider/slider2.png'
import PostCard from '../components/PostCard'
import SortBy from '../components/SortBy'
import ImageSlider from '../components/ImageSlider'
import { useStore } from 'react-redux'
import { useSelector } from 'react-redux'
import { AchievementBanner } from '../components/AchievementBanner'

export default function HomePage({ ...props }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const postList = useSelector((store) => store.post)

  console.log(postList)

  return (
    <>
      <main
        style={{
          backgroundColor: myTheme.paper.backgroundColor,
        }}
      >
        <MainNavbar setShowSidebar={setShowSidebar} />

        {/* <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isMd ? '270px 1fr auto' : '1fr auto',
          }}
        > */}
        <div className='grid w-full xxl:grid-cols-mediumDevice xl:grid-cols-mediumDevice lg:grid-cols-mediumDevice md:grid-cols-mediumDevice sm:grid-cols-smallDevice xs:grid-cols-smallDevice'>
          <HomeSidebar {...{ showSidebar, setShowSidebar }} />
          <div className="  xxl:pt-3 xl:pt-0 lg:pt-0 md:pt-3 sm:pt-0 xs:pt-0 xxl:pr-3 xl:pr-3 lg:pr-3 md:pr-3 sm:pr-0 xs:pr-0">
            {/* <div className="mt-5">
              <ImageSlider />
            </div> */}
            <div className="mt-5">
              <NewPost />
            </div>
            <div className="mt-1">
              <SortBy />
            </div>
            <div className="mt-1">
              {postList.slice(0, 2).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-1">
              <AchievementBanner />
            </div>
            <div class="mt-1">
              {postList.slice(2).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className="m-auto pt-3 xxl:block xl:block lg:block md:block sm:block xs:block pr-4">
            <div className="flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] md:w-[350px] xl:w-[300px] sm:w-[359px] xs:w-[345px]">
              <RedeemPointsWidget />
              <RecommendationWidget />
              <CelebrationWidget />
              <Top5UserWidget />
              <SurveyOngoingWidget />
              <RecentCampaignWidget />
            </div>
          </div>
        </div>
        {/* </Box> */}
      </main>
    </>
  )
}
