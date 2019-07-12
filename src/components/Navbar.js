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


    <nav id="navbar" >
    
    <Bio />
    <div style=
    {{
        marginLeft: `auto`,
        marginRight: `auto`,
        zIndex: `2`,
        maxWidth: rhythm(30),
        padding: `0 ${rhythm(3 / 4)}`,
        
      }}
      >

      <ul style={{ listStyle: `none`, marginBottom:`0`}}>
        <ListLink  to="/">Projects</ListLink>
        <li style={{display:`inline-block`, marginRight:`1rem`}}>
          <a style={{color:`#b59575`}} href={resume}>Resume</a></li>
        <ListLink to="/blog/">Blog</ListLink>
      </ul>
    </div>

    </nav>
    
    )
    
}

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0.2rem 2rem";
    document.getElementById("navbar-bio").style.opacity = "0";
    document.getElementById("navbar-bio").style.marginBottom = "-30px";
    document.getElementById("navbar-bio").style.visibility = "hidden";
   
  } else {
    document.getElementById("navbar").style.padding = "2rem 2rem";
    document.getElementById("navbar-bio").style.opacity = "100";
    document.getElementById("navbar-bio").style.marginBottom = "0px";
    document.getElementById("navbar-bio").style.visibility = "visible";
   
  }
}

export default Navbar;