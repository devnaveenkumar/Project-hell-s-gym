import React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  return (
    <div className='Header'>
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs:'40px'}, mt: {sm: '32px', xs:'20px'}, justifyContent: 'none'}} px="20px">
    <Link to = "/" style={{textDecoration: "none"}}>
    <Typography color="white" fontFamily="monospace" fontWeight="300" sx={{fontSize: {lg: '30px', xs: '40px'}}} mb="2px" mt="30px" mr="70px" ml="40px">devnaveenkumar</Typography>

    </Link>
    <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #008F11'}}>Home</Link>
        <Link to="/login" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #008F11'}}>Contact</Link>
        <Link to="/skills" style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #008F11'}}>Skills</Link>
        <Link to="/about"  style={{textDecoration: 'none', color: 'white', borderBottom: '3px solid #008F11'}}>About</Link>
    </Stack>
</Stack>
    </div>
    
  )
}

export default Navbar