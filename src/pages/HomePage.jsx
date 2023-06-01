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

import PostCard from '../components/PostCard'
import SortBy from '../components/SortBy'
import ImageSlider from '../components/ImageSlider'
import { useStore } from 'react-redux'
import { useSelector } from 'react-redux'
import { AchievementBanner } from '../components/AchievementBanner'
import MyRewards from '../components/MyRewards'
import RewardPopup from '../components/RewardPopup'
import PopularCategories from '../components/HomeRightSidebar/PopularCategories'

export default function HomePage({ ...props }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const postList = useSelector((store) => store.post)

  console.log(postList)

  return (
    <>
      <div className="xxl:pl-0 xl:pl-0 lg:pl-0 xxl:pt-3 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 xs:pt-0 xxl:pr-3 xl:pr-3 lg:pr-3 md:pr-3 md:pl-3 sm:pr-0 xs:pr-0">
        <div className="mt-3">
          <ImageSlider />
        </div>
        <div className="mt-3 relative z-20">
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
        <div className="mt-1">
          {postList.slice(2).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        {/* <div className="my-2">
          <MyRewards />
        </div> */}
        {/* <div className="my-2">
          <RewardPopup />
        </div> */}
      </div>

      <div className="pt-3 pr-6 xxl:pr-6 xl:pr-6 lg:pr-6 md:pr-3 flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] lg:w-[235px] md:w-[260px] xl:w-[325px] sm:w-[359px] xs:w-[425px]">
        <RedeemPointsWidget />
        <RecommendationWidget />
        <CelebrationWidget />
        <Top5UserWidget />
        <SurveyOngoingWidget />
        <RecentCampaignWidget />
        <PopularCategories />
      </div>
    </>
  )
}
