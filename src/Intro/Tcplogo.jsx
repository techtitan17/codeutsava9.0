import "./Tcplogo.css";
import tcplogo from "../assets/a.png";

export default function Tcplogo(){
    return (
        <div className="containerlogo">
        <div className="tcplogo">
            <img src={tcplogo} height={80} cover style={{padding:0,margin:0}}></img>
        </div>
        <div className="tcpName">
            <p>Turing &nbsp;Club &nbsp;of </p>
            {/* <br></br> */}
            <p>Programmers</p>
            <p>NITRR</p>
            
        </div>
        </div>
    )
}