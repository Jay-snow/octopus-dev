/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"



function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        const siteTitle = data.site.siteMetadata.title
        return (
          <div
            style={{
              display: `flex`,
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              color: `#f1e0d4`,
              padding: `0 ${rhythm(3 / 4)}`,
              
            }}
          >
            { /*
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            */ }
            
            <p>
            <h1 style={{ marginTop:`0`  }}>
              MarcusSnow.dev
            </h1>

            I'm <Link to="/aboutme/"><strong>{author}</strong></Link>: a web developer, game developer, writer, nerd, and animation enthusiast.
              {` `}
             
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
