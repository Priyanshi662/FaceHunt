import Tilt from 'react-vanilla-tilt';
import React from 'react';
import './Logo.css';
import myLogo from './myLogo.png';
const Logo =()=>{
    return(
      <div className='container ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa3">
              <img style={{padding:"25px"}} alt='logo' src={myLogo}/>
          </div>
        </Tilt>
      </div>
    );
}
export default Logo;