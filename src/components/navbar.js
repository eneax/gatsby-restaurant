import React, { Component } from 'react'
import styled from 'styled-components'

import NavbarHeader from './navbarHeader'
import NavbarLinks from './navbarLinks'
import NavbarIcons from './navbarIcons'


export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
