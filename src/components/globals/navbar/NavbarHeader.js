import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'


export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props

    return (
      <HeaderWrapper>
        <Link to='/'>
          <img src={logo} alt="Company name"/>
        </Link>
        <FaAlignRight 
          className='toggle-icon'
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.75rem;
    color: yellowgreen;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
