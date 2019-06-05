import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/Navbar"


class AboutMe extends React.Component {
render() {

    return (
        <div>
    <Navbar />
    <Layout location={this.props.location} >
    
    
    
    <h1> I'm Marcus Snow. I'm a web developer based in Atlanta, Georgia.</h1>
    
    </Layout>
    </div>
    )
  
}
}

export default AboutMe