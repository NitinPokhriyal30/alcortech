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

export default function HomePage({ ...props }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const postList = useSelector((store) => store.post)

  console.log(postList)

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
        <div className="pt-3 pr-3">

          <ImageSlider />
          <div className="mt-5">
            <NewPost />
          </div>
          <div className="mt-1">
            <SortBy />
          </div>
          <div className="mt-1">
            {postList.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="pt-3 xxl:block xl:block lg:block md:block sm:hidden xs:hidden pr-4">
          <div className="flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] md:w-[350px] xl:w-[300px] ">
            <RedeemPointsWidget />
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
