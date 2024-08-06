import React from 'react'
import ProfileDetails from './ProfileDetails'
import { Box,Grid } from '@mui/material'
import Progress from './Progress'
import Topics from './Topics'
import Leetcode from './Leetcode'

const ProfileFeed = () => {
  return (
    <Box className='flex bg-black'>
      <ProfileDetails />
      <Box className='flex gap-8 p-2'>
        <Progress />
        <Box className='grid grid-rows-2 grid-flow-col p-2 '>
          <Leetcode />
          <Topics  />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileFeed