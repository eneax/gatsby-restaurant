import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../utils'


export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
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
        name: 'contact',
      },
    ],
  }

  render() {
    return (
      <NavbarLinksWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </NavbarLinksWrapper>
    )
  }
}


const NavbarLinksWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  
  height: ${props => (props.open ? '152px' : '0px')};
  overflow: hidden;
  ${styles.transObject({})};

  @media (min-width: 768px) {
    height: auto; /* otherwise links won't show up */
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`
