import HeaderStyles from './index.module.scss'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.container}>
    <div className={HeaderStyles.content}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav className={HeaderStyles.navigation}>
        <ul className={HeaderStyles.menuList}>
          <li className={HeaderStyles.menuItem}>
            <Link className={HeaderStyles.menuItemLink} to="/">
              Início
            </Link>
          </li>
          <li>
            <Link className={HeaderStyles.menuItemLink} to="/about">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
