import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ari Kardasis`,
    siteUrl: `https://arikardasis.com`,
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-postcss'],
}

export default config
