// import {
//   Assignment,
//   BarChart,
//   Campaign,
//   CardGiftcard,
//   Groups,
//   Home,
//   RecordVoiceOver,
// } from '@mui/icons-material'
// import { Box, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { Link } from 'react-router-dom'
// import * as React from 'react'
// import { breakpoints, myTheme } from '../myTheme'

// export default function HomeSidebar({ ...props }) {
//   const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)

//   const headerHeight = isMd ? myTheme.header.md.height : myTheme.header.height
//   return (
//     <Box
//       sx={{
//         position: 'sticky',
//         top: headerHeight,
//         px: 1,
//         height: `calc(100vh - ${headerHeight}px)`,
//       }}
//       className={`py-4 ${isMd ? 'block' : 'hidden'}`}
//     >
//       <Box
//         sx={{
//           height: '100%',
//           bgcolor: myTheme.sidebar.bgcolor,
//           borderRight: '1px solid',
//           borderColor: myTheme.sidebar.borderColor,
//           borderRadius: 3,
//           p: 1.5,
//           color: 'white',
//         }}
//       >
//         <Stack direction="row" alignItems="center" gap={2} pb={2.5} borderBottom={1}>
//           <img
//             style={{
//               width: '50px',
//               height: '50px',
//               borderRadius: 999,
//               background: '#ccc',
//             }}
//           />

//           <div>
//             <Typography variant="body" fontWeight="600">
//               Hi
//             </Typography>
//             <Typography variant="body2">Semand javed</Typography>
//           </div>
//         </Stack>

//         <List>
//           <ListItemButton>
//             <Home sx={{ mr: 2 }} />
//             <Typography variant="body2">Home</Typography>
//           </ListItemButton>

//           <ListItemButton>
//             <CardGiftcard sx={{ mr: 2 }} />
//             <Typography variant="body2">My Rewards</Typography>
//           </ListItemButton>

//           <ListItemButton>
//             <Groups sx={{ mr: 2 }} />
//             <Typography variant="body2"> My Team</Typography>
//           </ListItemButton>
//           <ListItemButton>
//             <BarChart sx={{ mr: 2 }} />
//             <Typography variant="body2">Analytics</Typography>
//           </ListItemButton>
//           <ListItemButton>
//             <Campaign sx={{ mr: 2 }} />
//             <Typography variant="body2">Campaigns</Typography>
//           </ListItemButton>

//           <ListItemButton LinkComponent={Link} to="/survey">
//             <Assignment sx={{ mr: 2 }} />
//             <Typography variant="body2">Survey</Typography>
//           </ListItemButton>

//           <ListItemButton>
//             <RecordVoiceOver sx={{ mr: 2 }} />
//             <Typography variant="body2">Voice Out</Typography>
//           </ListItemButton>
//         </List>
//       </Box>
//     </Box>
//   )
// }

import User from '../assets/images/user-profile/user.png'

import { AiFillHome, AiFillGift } from 'react-icons/ai'
import { RiTeamFill, RiSurveyFill, RiUserVoiceFill } from 'react-icons/ri'
import { SiGoogleanalytics } from 'react-icons/si'
import { HiSpeakerphone } from 'react-icons/hi'
import { BsQuestionCircle } from 'react-icons/bs'
import useMediaQuery from '@mui/material/useMediaQuery'
import { breakpoints, myTheme } from '../myTheme'
import { Link, NavLink } from 'react-router-dom'

export default function HomeSidebar() {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)

  const headerHeight = isMd ? myTheme.header.md.height : myTheme.header.height

  return (
    <div
      style={{
        top: headerHeight + 'px',
        height: `calc(100vh - ${headerHeight}px)`,
        display: isMd ? 'block' : 'none',
      }}
      className="p-3 overflow-y-auto sticky "
    >
      <div className="h-full bg-primary rounded-[9px]">
        <div className="">
          {/*------------- Profile  ----------------------*/}

          <div className="flex items-center gap-3 border-b-2 border-[#7096DB] pb-5 px-5">
            <div>
              <img src={User} alt="user avatar" />
            </div>
            <div>
              <p className="text-white font-Lato text-[16px] font-black">Hi</p>
              <span className="text-white font-Lato text-[16px] font-normal">Pankaj Kohli</span>
            </div>
          </div>

          {/*-------------- Nav Items  -------------------*/}

          <div>
            <div className="flex flex-col px-1 py-5">
              <div className="flex px-5 rounded py-2.5 gap-2 items-center ">
                <p className="text-white text-[18px]">
                  <AiFillHome />
                </p>
                <span className="text-white font-Lato font-normal leading-[22px]">Home</span>
              </div>
              <div className="flex px-5 rounded py-2.5 gap-2 items-center ">
                <p className="text-white text-[18px]">
                  <AiFillGift />
                </p>
                <span className="text-white font-Lato font-light leading-[22px]">My Rewards</span>
              </div>
              <div className="flex px-5 rounded py-2.5 gap-2 items-center ">
                <p className="text-white text-[18px]">
                  <RiTeamFill />
                </p>
                <span className="text-white font-Lato font-light leading-[22px]">My Team</span>
              </div>
              <div className="flex px-5 rounded py-2.5 gap-2 items-center ">
                <p className="text-white text-[18px]">
                  <SiGoogleanalytics />
                </p>
                <span className="text-white font-Lato font-light leading-[22px]">Analytics</span>
              </div>
              <div className="flex px-5 rounded py-2.5 gap-2 items-center ">
                <p className="text-white text-[18px]">
                  <HiSpeakerphone />
                </p>
                <span className="text-white font-Lato font-light leading-[22px]">Campaigns</span>
              </div>
              <Link
                to="/survey"
                className="flex px-5 rounded py-2.5 gap-2 items-center hover:bg-blue-400 _bg-opacity-5"
              >
                <p className="text-white text-[18px]">
                  <RiSurveyFill />
                </p>
                <span className="text-white font-Lato font-light leading-[22px]">Survey</span>
              </Link>
              <div className="flex px-5 rounded py-2.5 gap-2 items-center ">
                <p className="text-white text-[18px]">
                  <RiUserVoiceFill />
                </p>
                <span className="text-white font-Lato font-light leading-[22px]">Voice Out</span>
              </div>
            </div>
          </div>

          {/*--------------- FAQ Section  ----------------*/}

          <div className="mt-8 px-5">
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
    </div>
  )
}
