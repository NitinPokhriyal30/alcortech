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
      <div className="lg:pl-0 xxl:pt-3 xs:pt-0 pl-3 pr-3">
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
      </div>

      <div className="pt-3 pb-5 lg:pr-6 md:pr-3 md:pl-1 pr-3 pl-3 flex flex-col gap-3 overflow-y-auto xl:w-[325px] lg:w-[235px] md:w-[260px] w-full">
        <RedeemPointsWidget />
        <RecommendationWidget />
        <CelebrationWidget />
        <Top5UserWidget />
        <SurveyOngoingWidget />
        <RecentCampaignWidget />
      </div>
    </>
  )
}
