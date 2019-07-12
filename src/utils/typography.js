import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = ( {rhythm}) => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "#navLinks": { 
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(30),
      padding: `0 ${rhythm(3 / 4)}`,
    },
    "#navLinks > ul": {
      listStyle: `none`, 
      marginBottom:`0`,
    },

  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
