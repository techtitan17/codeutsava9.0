import "./LargeDev.css"
import Devfolio from "./Devfolio.jsx";
import innovateFont from "../assets/innovateFont.png";
import largestEvent from"../assets/largestEvent.png"

export default function LargeDev(){
    return(
        <>
         <div className="innovate">
                    {/* <img src={innovateFont} height={40} className="innovateFont"></img>
                    <img src={largestEvent} height={30} ></img> */}
                    <p className="innovateFont">CODE. INNOVATE. CELEBRATE</p>
                    <p className="largeFont">CENTRAL &nbsp; INDIA'S &nbsp;   LARGEST  &nbsp; CODING EVENT. &nbsp; JOIN US ON DATE</p>
                    <Devfolio></Devfolio>
                </div>
        
        
        </>
    )
}