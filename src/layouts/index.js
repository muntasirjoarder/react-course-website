import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/Footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    
<Header />
      {children()}
    <Footer data={data.allContentfulFooterLinks}>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
    </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        keywords
        description
      }
    }
    allContentfulFooterLinks(sort: {fields:[linkOrder], order: ASC}){
      edges{
        node{
          title
          url
          linkOrder
        }
      }
    }
  }
`
