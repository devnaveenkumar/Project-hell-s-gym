import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Hellsfinal from '../assets/images/Hellsfinal.png'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs:'40px'}, mt: {sm: '32px', xs:'20px'}, justifyContent: 'none'}} px="20px">
        <Link to = "/">
            <img src={logo} alt="" style={{width : '290px', height:'160px'}}/>
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to="/" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #8B0000'}}>Home</Link>
            <Link to="/login" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #8B0000'}}>Login</Link>

        </Stack>
    </Stack>
  )
}

export default Navbar