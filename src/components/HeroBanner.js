import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
import banner from '../assets/images/banner.png'
import '../App.css'


const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml:{ sm:'50px'}}} position="relative" >
        <Typography color="	#8B0000" fontWeight="700" sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">Sweat, Smile <br />and Repeat</Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>Check out the most effective exercises</Typography>
        <Link to = "/exercises" style={{textDecoration: "none"}}>

        <Button variant = "contained" color="error"  sx={{backgroundColor: '	#7B1818', padding: '10px'}}>Explore Exercises</Button>

        </Link>
        <Typography fontWeight={600} color="#8B0000" sx={{
            opacity: 0.2,
            display: {lg: 'block', xs: 'none'}
        }} 
        fontSize="200px">Exercise</Typography>
        <img src={banner} alt="" className='hero-banner'/>
        </Box>
  )
}

export default HeroBanner