import React from 'react'
import { Button, TextField } from '@mui/material'
import '../App.css'


function Login() {
  return (
    <div className='login'>
        <form action="">
            <label><h3 style={{fontSize: "20px"}}>Email</h3> </label>
            <TextField id="filled-basic"  variant="filled" sx={{width: "400px"}}/>
            <label><h3 style={{fontSize: "20px"}}>Password</h3> </label>
            <TextField id="filled-basic"  variant="filled" sx={{width: "300px"}}/>
            <br />
            <br />
            <br />
            <Button variant = "contained" color="error" sx={{backgroundColor: '	#7B1818', padding: '10px', width: "200px"}}>Login</Button>
            </form>
    </div>
  )
}

export default Login