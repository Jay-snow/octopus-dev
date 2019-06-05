import React from "react"
import Bio from "../components/bio"
function Navbar() {
    return (
    <nav style={ { border: `5rem`, backgroundColor: `teal`, padding:`1rem`}}>
    
    <Bio />
    </nav>
    )
}

export default Navbar