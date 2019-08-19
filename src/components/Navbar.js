import React from "react";
import resume from "./resume.jpg";
import Bio from "../components/bio";
import { rhythm } from "../utils/typography";


import { Link } from "gatsby";
import './styles.css';


/**Navbar link navigation */
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{color: `#b59575`}} to={props.to}>{props.children}</Link>
  </li>
)

function Navbar() {
    return (

    <div id="navbar_container">
      <nav id="navbar" >
      
      <Bio />
      <div id="navLinks">
      
        <ul>
          <ListLink  to="/">Projects</ListLink>
          <li style={{display:`inline-block`, marginRight:`1rem`}}>
            <a style={{color:`#b59575`}} href={resume}>Resume</a></li>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </div>

      </nav>

      
    </div>
    
    )
    
}

if (typeof window !== 'undefined' ) {

window.onscroll = function() {scrollFunction()};

  function scrollFunction() {

    
    
    let navbar = document.getElementById("navbar");
    let navbarBio = document.getElementById("navbar-bio");

    if ( navbar !== null){

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        
        navbar.style.padding = "0.2rem 2rem";
        navbarBio.style.opacity = "0";
        navbarBio.style.marginBottom = "-30px";
        navbarBio.style.visibility = "hidden";
      
      } else {
        navbar.style.padding = "2rem 2rem";
        navbarBio.style.opacity = "100";
        navbarBio.style.marginBottom = "0px";
        navbarBio.style.visibility = "visible";
    
      }

    } else {
      console.log("Nope not moving");
    }

  }
}
export default Navbar;