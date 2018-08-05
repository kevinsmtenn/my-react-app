module.exports = {
  siteMetadata: {
    title: 'Kevins React Project',
    description: 'My awesome site',
    keywords: 'react, designers'
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'x9qtxwmkofc7',
        accessToken: 'e32a4ba58a910708354205906885cc9e592c8361fac4627c83daf308076e5753'
      }
    }],
}
