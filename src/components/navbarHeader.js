import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'

import logo from '../images/logo.svg'
import { styles } from '../utils'


export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props

    return (
      <NavbarHeaderWrapper>
        <Link to='/'>
          <img src={logo} alt="Company name"/>
        </Link>
        <FaAlignRight 
          className='toggle-icon'
          onClick={() => {
            handleNavbar()
          }}
        />
      </NavbarHeaderWrapper>
    )
  }
}


const NavbarHeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    cursor: pointer;
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
