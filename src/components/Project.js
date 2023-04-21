import React from 'react'
import '../App.css'
import Card from './Card'

import plc from '../assets/images/plc.png'




const Projects = () => {
  return (
    <div className='projects'>
      <a style={{textDecoration: "none", color:"white"}} href="https://github.com/devnaveenkumar/spotify-clone"><Card img = {plc} head = "Spotify-clone"/></a>
      <a style={{textDecoration: "none", color:"white"}} href=""><Card img = {plc} head = "Word counter"/></a>
      <Card img = {plc} head = "Numberates"/>
      <Card img = {plc} head = "Personal portfolio(old)"/>
      </div>
  )
}

export default Projects