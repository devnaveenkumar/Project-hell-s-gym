import React from 'react';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import insta from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
function Footer() {
  return (
    <div>
        <div className='footer'>
        <a href="https://www.linkedin.com/in/naveenkumar-t-7b5404230/"><img src={linkedin} alt="" style={{width:"50px"}}/></a>
        <a href="https://github.com/devnaveenkumar"><img src={github} alt="" style={{width:"50px"}}/></a>
        <a href="https://www.instagram.com/itsactuallynaveen/"><img src={insta} alt="" style={{width:"50px"}}/></a>
        <a href="https://twitter.com/itsactuallynavn"><img src={twitter} alt="" style={{width:"50px"}}/></a>       
        <a href=""><img src={facebook} alt="" style={{width:"60px"}}/></a>

        </div>
        
        <div style={{textAlign: "center", fontFamily: "sans-serif", fontSize: "large"}}>
            © devnaveenkumar, inc. All rights reserved.
            <br />
        </div>
    </div>
  )
}

export default Footer;