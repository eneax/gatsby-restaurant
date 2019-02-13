import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'

import { colors, textSlanted, letterSpacing } from '../components/styles/globalStyles'


export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props

    return (
      <NavbarHeaderWrapper>
        <Link to='/' className='logo'>
          Delicious
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
  padding: .4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-top: .01rem;
    ${textSlanted};
    ${letterSpacing({})};
    transform: skew(-15deg);
    font-size: 1.75rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${colors.mainWhite};
    text-shadow: 1px 1px 0 rgba(${colors.mainGrey}, .4);
  }
  
  .logo {
    background-image: linear-gradient(to right, ${colors.mainGrey} 50%, ${colors.mainOrange} 50%);
    background-position: 0;
    background-size: 200%;
    transition: all .4s;
    &:hover {
      background-position: -100%;
    }
  }

  .toggle-icon {
    cursor: pointer;
    font-size: 1.75rem;
    color: ${colors.mainOrange};
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
