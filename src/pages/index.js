import React from "react"
import { Link, graphql } from "gatsby"
import PortfolioProject from "../components/portfolioproject"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Navbar from "../components/Navbar"

import Svg from "../components/svg.js"


const SkillList = props => (
  <li style={{ 
    display: `inline-block`, 
    marginRight: `1rem`, 
    backgroundColor:`#007bff`,
    borderRadius: `.25rem`,
    fontWeight:`700`,
    verticalAlign:`baseline`,
    fontSize: `75%`,
    color: `#fff`,
    textAlign: `center`,
    padding: `2px 5px` }}>
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
      <Layout location={this.props.location}  style={{paddingTop:`0`}}>
        <SEO title="About Me" />
        <h2>Portfolio</h2>
        <p>Web Developer based in Atlanta. I am currently looking for work in front-end development - I would love to <a href="mailto:marcusjsnow1@gmail.com">hear from you. </a></p>
        <h2> Projects </h2>

        <PortfolioProject 
      name="Poke-A-Tweet"
      description="A twitter inspired social media website. Features include login and authentication, unique user profile pages, a shared timeline, and more."
      plink="https://snowjay.org/projects/twitter-clone/"
      >
        <SkillList>PHP </SkillList>
        <SkillList>mySQL </SkillList>
        <SkillList>Bootstrap </SkillList>
        <SkillList>Javascript </SkillList>
       </PortfolioProject>

        <PortfolioProject 
      bgColor="teal"
      name="Marcussnow.dev"
      description="A custom created blog, made with React and Gatsby. "
      plink="/blog"
      >
        <SkillList>React </SkillList>
        <SkillList>Gatsby </SkillList>
        <SkillList>Netlify </SkillList>
        <SkillList>HTML </SkillList>
        <SkillList>CSS </SkillList>
      </PortfolioProject>
      
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