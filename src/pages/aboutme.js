import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"


class AboutMe extends React.Component {
render() {

    return (
        <div>
    <Navbar />
    <Layout location={this.props.location} title="About Me" >
    
    <p> Hi! I'm Marcus Snow. I have over five years experience developing websites and analyzing landing pages.</p>



    <p>I am currently looking for work. If you are looking for a junior developer, I would love to hear from you.  </p>
    
    
    
    <p></p> 
    </Layout>
    </div>
    )
  
}
}

export default AboutMe