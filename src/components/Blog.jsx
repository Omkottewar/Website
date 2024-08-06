import { Box } from '@mui/material'
import React from 'react'

const Blog = ({algorithm,title,approach,problemStatement}) => {
  return (
    <Box className='pr-2 flex flex-col gap-6 p-4'>
    <h1>Title:{title}</h1> 
   <h5 className='font-medium'>Problem Statement: </h5>
   <p>  {problemStatement}</p>

    <p><strong>Approach</strong>: 
    {approach}</p>

    <strong>Algorithm:</strong>
    <p>{algorithm}</p>
  
    </Box>
  )
}

export default Blog