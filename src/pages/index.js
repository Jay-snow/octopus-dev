import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Navbar from "../components/Navbar"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
      <Navbar />
      <Layout location={this.props.location} title="Blog Posts">
        <SEO title="All posts" />
        
        <p> Hi </p>
        <h2> Languages </h2>
        <ul>
          <li> HTML </li>
          <li> CSS </li>
          <li>Javascript</li>
          <li>React</li>
          <li>PHP</li>
  
        </ul>

        <h2>Tools &amp; Databases</h2>
        <ul>
          <li>Git/GitHub</li>
          <li>Gatsby</li>
          <li>APIs</li>
          <li>mySQL </li>
          <li>Wordpress </li>
        </ul>



      </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`