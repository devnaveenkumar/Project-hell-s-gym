import React from 'react'
import { Button, TextField } from '@mui/material'
import '../App.css'


function Login() {
  return (
    <div className='login'>
        <form action="">
            <label><h3 style={{fontSize: "20px"}}>Email</h3> </label>
            <TextField id="filled-basic"  variant="filled" sx={{width: "300px"}}/>
            <label><h3 style={{fontSize: "20px"}}>Your message</h3> </label>
            <TextField id="filled-basic"  variant="filled" sx={{width: "400px"}}/>
            <br />
            <br />
            <br />
            <Button variant = "contained" color="error" sx={{backgroundColor: '	#008F11', padding: '10px', width: "200px"}}>Send</Button>
            </form>
    </div>
  )
}

export default Login