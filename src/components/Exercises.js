import React from 'react'
import '../App.css'
import Card from './Card'
import hiit from '../assets/images/hiit.jpg'
import aeronew from '../assets/images/aeronew.png'
import yoga from '../assets/images/yoga.jpg'
import strength from '../assets/images/strength.jpg'
import sports from '../assets/images/sports.avif'
import balance from '../assets/images/balance.webp'



const Exercises = () => {
  return (
    <div className='exercise'>
      <Card img = {hiit} head = "HIIT & Crossfit"/>
      <Card img = {aeronew} head = "Aerobic & Cardio"/>
      <Card img = {yoga} head = "Yoga & Pilates"/>
      <Card img = {strength} head = "Strength Training"/>
      <Card img = {sports} head = "Sports Training"/>
      <Card img = {balance} head = "Stretching and balance"/>
      </div>
  )
}

export default Exercises