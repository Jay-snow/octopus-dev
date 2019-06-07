import React from "react";
import Bio from "../components/bio";
import { rhythm } from "../utils/typography";

import { Link } from "gatsby";
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{color: `#b59575`}} to={props.to}>{props.children}</Link>
  </li>
)

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
        <ListLink to="/about/">Resume</ListLink>
        <ListLink to="/aboutme/">About</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
      </ul>
    </div>

    </nav>
    )
}

export default Navbar;