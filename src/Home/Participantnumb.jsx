
import CountUp from 'react-countup';
import "./Participantnumb.css";


const Participantnumb = () => {
  return (
    <>
    
     <div className="partcont">
        <div className="com">
            Teams
             <br></br>
      <CountUp end={1000} duration={3} />+
     </div>
        <div className="com">Colleges
            <br></br>
      <CountUp end={100} duration={3} />+ </div>
        <div className="com">Developers 
            <br></br>
      <CountUp end={2000} duration={3} />+
        </div>
        <div className="com">Visitors
            <br></br>
      <CountUp end={3000} duration={3} />+ </div>
     </div>
     </>
  );
};

export default Participantnumb;

