import { Box } from '@mui/material'
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress'

const Progress = () => {
  return (
    <Box>
        <h1 className='text-4xl'>Progress</h1>
        <Box className="flex justify-between">
            <CircularProgress/>
            <CircularProgress/>

        </Box>
    </Box>
  )
}

export default Progress