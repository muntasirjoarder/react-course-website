module.exports = {
  siteMetadata: {
    title: 'React course',
    description: 'React courseReact courseReact courseReact courseReact courseReact courseReact courseReact course',
    keywords: 'react course, css, tutorial',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3rkf7dpfznat',
        accessToken: 'fdcb5ccf0ec66339d990c6addfd5f7e66696115dad003138ce71dac8d99f38d3'
      }
    }
  ],
}
