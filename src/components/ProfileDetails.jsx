import { Box } from '@mui/material'
import React from 'react'
import {default as profilePic} from '../assets/profile.png'

const ProfileDetails = () => {
  return (
<Box className='m-3 bg-gray-700 w-80 h-full p-4 flex-col justify-center '>
        <img src={profilePic} className='w-40 m-auto '  />
        <p>#Omkottewar</p>
        <Box>
        <ul className='flex justify-center gap-2'>
            <li><i class="fa-brands fa-github"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li></li>
        </ul>
        </Box>
    </Box>
    
        

  )
}

export default ProfileDetails