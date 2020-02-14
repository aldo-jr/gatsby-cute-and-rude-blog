import 'styles/index.scss'

import { graphql, useStaticQuery } from 'gatsby'

import Footer from 'components/footer'
import Header from 'components/header'
import LayoutStyles from './index.module.scss'
import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={LayoutStyles.main}>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
