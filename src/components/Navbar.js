import React from "react";
import resume from "./resume.jpg";
import Bio from "../components/bio";
import { rhythm } from "../utils/typography";

import { Link } from "gatsby";
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{color: `#b59575`}} to={props.to}>{props.children}</Link>
  </li>
)

console.log(resume);

function Navbar() {
    return (
    <nav style={ { border: `5rem`, backgroundColor: `#372312`, padding:`1rem`}}>
    
    <Bio />
    <div style=
    {{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
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

export default Navbar;