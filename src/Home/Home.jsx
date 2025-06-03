import Navbar from "./Navbar.jsx";
import "./Home.css";
import welcomeFont from "../assets/b.png";
import codeutsavaFont from "../assets/c.png";
import Participants from "./Participants.jsx";
import LargeDev from "./LargeDev.jsx";
import AboutUs from "./AboutUs.jsx";
import Sponsor from "./sponsor.jsx";



export default function Home(){
    return(
        <>
        <Navbar/>
        
        <div className="container1">
        <div className="welcome">
            <img src={welcomeFont}  height={80}></img>
        </div>
        <div className="codeutsavaFont">
            <img src={codeutsavaFont}  height={150}></img>
        </div>
        </div>
        <div className="btncontainer">
        <button className="playbtn">
            <h1>Play</h1>
            {/* <p>Explore CodeUtsava in a New Way</p> */}
        </button>
        </div>
       
        <LargeDev/>
        <Participants/>
         <Sponsor/>
        <AboutUs/>
        </>
    )
}