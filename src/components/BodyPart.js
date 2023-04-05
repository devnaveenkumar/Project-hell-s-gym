import React from 'react'
import { Stack, Typography } from '@mui/material'
import iconf from '../assets/images/iconf.png'
import '../App.css'


const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type ="button" 
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        backgroundColor: "black",
        borderBottomLeftRadius: "20px",
        width: "280px",
        height: "270px",
        cursor: "pointer",
        gap: "47px"
    }}
    >
        <img src={iconf} alt="icon"  style={{width: '200px', height: '160px'}}/>
    </Stack>
  )
}

export default BodyPart