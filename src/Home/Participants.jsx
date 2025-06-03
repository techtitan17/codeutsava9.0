import "./Participants.css";
import sword from "../assets/sword2.png";

import Participantnumb from "./Participantnumb";
export default function Participants(){
    return(
        <>
        <div className="par">
        <div className="participantCont">
            <img src={sword} height={150} cover></img>
            {/* <img src={ParticipantImg} height={50} ></img> */}
            LAST YEAR PARTICIPATION
             <img src={sword} height={150} cover id="rightSword"></img>
        </div>
        <Participantnumb/>
        </div>
        </>
    )
}
