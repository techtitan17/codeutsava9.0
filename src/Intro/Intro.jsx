import "./Intro.css";
import Tcplogo from './Tcplogo.jsx';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Home from '../Home/Home.jsx';
import swordSoundFile from '../assets/sword.mp3';
import homeTheme from '../assets/homeTheme.mp3'; // 🎵 New home page audio
import transitionGif from '../assets/uno-rev.gif';

const Intro = () => {
  const introRef = useRef();
  const [hidden, setHidden] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const handleHide = () => {
    if (introRef.current && !hidden) {
      const swordSound = new Audio(swordSoundFile); // Sword clash
      swordSound.preload="auto";
      swordSound.play();

      gsap.to(introRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.6,
        onComplete: () => {
          setShowGif(true); // show the transition gif

          setTimeout(() => {
            setShowGif(false);
            setHidden(true);
          }, 4000); // Duration of the GIF
        }
      });
    }
  };

  // 🎵 Play home theme music when Home is shown
  useEffect(() => {
    if (hidden && !showGif) {
      const homeMusic = new Audio(homeTheme);
      homeMusic.preload='auto';
      homeMusic.loop = true; // optional: loop background music
      homeMusic.volume = 0.5; // optional: set volume
      homeMusic.play().catch((err) => {
        console.warn("Home music autoplay blocked:", err);
      });
    }
  }, [hidden, showGif]);

  return (
    <>
      {/* Show Intro */}
      {!hidden && !showGif && (
        <div ref={introRef}>
          <Tcplogo />
          <section id="intro">
            <p className="intro-text">Welcome to Codeutsava </p>
            <p className="intro-text version">9.0</p>
            <button id="enter-btn" onClick={handleHide}>LET'S GO</button>
          </section>
        </div>
      )}

      {/* Show GIF Transition */}
      {showGif && (
        <div className="transition-gif-container">
          <img src={transitionGif} alt="Transition" className="transition-gif" />
        </div>
      )}

      {/* Show Home after transition */}
      {hidden && !showGif && (
        <div className="homepage">
          <Home />
        </div>
      )}
    </>
  );
};

export default Intro;

