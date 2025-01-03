import React from 'react';
import { Link } from "react-router-dom";
import logoNav from "../images/logoNav.png";
import htmlLogo from "../images/htmlLogo.png"; // Add your HTML logo image
import cssLogo from "../images/cssLogo.png";   // Add your CSS logo image
import jsLogo from "../images/jsLogo.png";     // Add your JS logo image

function Landing() {
  return (
    <>
     <div className="typing-container">
        <p className="typing-text">Welcome to WebWeaver, the future of development.</p>
      </div>
    <div className="landing-container">
        <img className="landingLogo" src={logoNav} alt="logo"/>
        <div className="link-container">
            <Link to="/signup" className="link-item">Sign up</Link>
            <Link to="/login" className="link-item">Login</Link>
        </div>
    </div>

    <div className='websiteGoal'>
        <h1 className='landingPage-Heading'>The best place to build, test, and discover front-end code</h1>
        <p className='tagLine'>Webweaver is a lite weight social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.</p>
        <p className='tagLine otherProduct'>Explore our lightweight online ide:<a href="https://blitzcoder.netlify.app/">BlitzCoder</a></p>
    </div>


    <div className="logos-slider">
        <div className="logo-card">
          <img src={htmlLogo} alt="HTML" className="logo-image" />
          <p>HTML</p>
        </div>
        <div className="logo-card">
          <img src={cssLogo} alt="CSS" className="logo-image" />
          <p>CSS</p>
        </div>
        <div className="logo-card">
          <img src={jsLogo} alt="JavaScript" className="logo-image" />
          <p>JavaScript</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
