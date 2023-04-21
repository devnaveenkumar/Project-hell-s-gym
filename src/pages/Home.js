import React, {useState} from 'react'
import {Box} from '@mui/material'
import Projects from '../components/Project'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Box>
        <HomePage />
        <Footer />
    </Box>
  )
}

export default Home