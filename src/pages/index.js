import React from "react"
import { Link, graphql } from "gatsby"
import PortfolioProject from "../components/portfolioproject"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Navbar from "../components/Navbar"


const SkillList = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, color:`red` }}>
    {props.children}
  </li>
)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
      <Navbar />
      <Layout location={this.props.location} title="Portfolio">
        <SEO title="All posts" />
        
        <h2> Languages </h2>
        <ul>
          <SkillList>HTML5 </SkillList>
          <SkillList> CSS </SkillList>
          <SkillList>Javascript</SkillList>
          <SkillList>React </SkillList>
          <SkillList>PHP</SkillList>
  
        </ul>

        <h2>Tools &amp; Databases</h2>

        <ul>
          <SkillList>Git/GitHub</SkillList>
          <SkillList>Gatsby</SkillList>
          <SkillList>APIs</SkillList>
          <SkillList>mySQL </SkillList>
          <SkillList>Wordpress </SkillList>
        </ul>

      

      </Layout>

      <PortfolioProject name="Marcussnow.dev"
      description="A custom created blog, made with React and Gatsby. "
      />
      <PortfolioProject name="Poke-A-Tweet"
      description="A Social Media website created with HTML5, PHP, and mySQL."
      />
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