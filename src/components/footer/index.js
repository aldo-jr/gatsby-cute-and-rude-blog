import FooterStyles from './index.module.scss'
import React from 'react'

const Footer = () => (
  <footer className={FooterStyles.footer}>
    <div className={FooterStyles.content}>
      © {new Date().getFullYear()}, Built with{' '}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
