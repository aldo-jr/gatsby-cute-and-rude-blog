import FooterStyles from './index.module.scss'
import PropTypes from 'prop-types'
import React from 'react'

const Footer = ({ author }) => (
  <footer className={FooterStyles.footer}>
    <div className={FooterStyles.content}>
      <p>© {new Date().getFullYear()}. Todos os direitos reservados</p>
      <p>
        <a href={author.github.url} target="_blank">
          {author.github.user}
        </a>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.object,
}

Footer.defaultProps = {
  author: {},
}

export default Footer
