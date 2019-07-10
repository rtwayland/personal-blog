import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import React from 'react'

const Header = ({ siteTitle }) => (
  <HeaderElement>
    <Nav>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <LinkContainer>
        <NavLink to="/dev" activeClassName="current-page">
          Dev
        </NavLink>
        <NavLink to="/keyboards" activeClassName="current-page">
          Keyboards
        </NavLink>
        <NavLink to="/about" activeClassName="current-page">
          About
        </NavLink>
      </LinkContainer>
    </Nav>
  </HeaderElement>
)

const HeaderElement = styled.header({
  background: '#999',
  marginBottom: `1.45rem`,
})

const LinkContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const Nav = styled.nav({
  margin: '0 auto',
  maxWidth: 960,
  padding: '1rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const NavLink = styled(Link)({
  color: '#333',
  margin: ' 0 0.5rem 0 0',
  padding: '0.25rem',
  textDecoration: 'none',
  '&.current-page': {
    borderBottom: '2px solid #333',
  },
  ' &:last-of-type': {
    marginRight: 0,
  },
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
