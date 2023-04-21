import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
import '../App.css'



const HomePage = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml:"70px"}} position="relative" >
        <Typography color="" fontFamily="monospace" fontWeight="700" sx={{fontSize: {lg: '48px', xs: '40px'}}} mb="23px" mt="20px" ml="10px">Sleep, Code <br />and Repeat</Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4} fontWeight="600" fontFamily="monospace">Check out My projects</Typography>
        <Link to = "/projects" style={{textDecoration: "none"}}>

        <Button variant = "contained" color="error"  sx={{backgroundColor: '	#008F11', padding: '10px'}} >Explore Projects</Button>

        </Link>
        <Typography fontWeight={600} color="#008F11" sx={{
            opacity: 0.5,
            display: {lg: 'block', xs: 'none'}
        }} 
        fontSize="200px" >Developer</Typography>
        
        
        </Box>
  )
}

export default HomePage;