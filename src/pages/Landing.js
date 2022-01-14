import React, { useState } from 'react'
import './Landing.css'
import Logo from '../assets/logoLarge.svg'
import Gallery from '../components/Gallery'
import Login from '../components/Login'

const Landing = (props) => {
  const [showState, setShowState] = useState(false)
  
  const handleShow = () =>{
    setShowState((showState) => showState = !showState )
  }

  return (
    <div className='landing' id='home'>
      <div className='landing-left'>
        <div className='landing-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='landing-title'>
          <h1>Share your best photos or videos</h1>
        </div>
        <div className='landing-description'>
          <p>
            Join now, share your creations with another people and enjoy other
            creations.
          </p>
        </div>

        <div className='landing-link'>
          <ul className='landing-button'>
            <button onClick={handleShow}>Login</button>
            <li>Register</li>
          </ul>
        </div>
      </div>

      <Login show={showState}/>

      <div className='landing-right'>
        <div className='landing-image'>
          {/* <Gallery /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing
