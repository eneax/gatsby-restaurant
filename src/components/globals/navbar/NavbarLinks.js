import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'


export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/about/',
        name: 'about',
      },
      {
        id: 2,
        path: '/menu/',
        name: 'menu',
      },
      {
        id: 3,
        path: '/contact/',
        name: 'contact'
      },
    ]
  }

  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {
          this.state.links.map((item) => (
            <li key={item.id}>
              <Link 
                to={item.path}
                className="nav-link"
              >
                {item.name}
              </Link>
            </li>
          ))
        }
      </LinkWrapper>
    )
  }
}


const LinkWrapper = styled.ul`

`