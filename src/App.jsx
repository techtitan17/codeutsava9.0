import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './Intro/Intro.jsx';
import Tcplogo from './Intro/Tcplogo.jsx';
import StarCanvas from './Intro/RainingStar.jsx';
import Navbar from './Home/Navbar.jsx';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';




function App() {
  return (
    <>
    
   <StarCanvas />
     <Intro/>
     
    </>
  )

}
export default App
