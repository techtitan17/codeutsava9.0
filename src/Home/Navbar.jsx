import "./Navbar.css";
import tcplogo from "../assets/a.png";
import codeutsavaLogo from "../assets/codeutsavaLogo.jpg";


export default function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav w-100 d-flex justify-content-evenly">
        <div>
          <img src={tcplogo} height={50}></img>
        </div>
        <button id="navbtn">feedback</button>
        <a class="nav-link active" aria-current="page" href="#">HOME</a>
        <a class="nav-link" href="#">ABOUT US</a>
        <a class="nav-link" href="#">FAQ</a>
        <a class="nav-link " >CONTACT US</a>
        <a class="nav-link " >TEAM</a>
         <button id="navbtn">BROCHURE</button>
          <div>
          {/* <img src={codeutsavaLogo} height={50}></img> */}
        </div>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}