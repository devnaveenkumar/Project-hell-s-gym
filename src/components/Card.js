import React from 'react'
import './card.css'
import { Box } from '@mui/material'
export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h2>{props.head}</h2>
    </div>
  )
}
