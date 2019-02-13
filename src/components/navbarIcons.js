import React, { Component } from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { colors, transObject } from '../components/styles/globalStyles'

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className='icon facebook-icon' />,
        path: 'https://www.facebook.com'
      },
      {
        id: 2,
        icon: <FaInstagram className='icon instagram-icon' />,
        path: 'https://www.instagram.com'
      },
      {
        id: 3,
        icon: <FaTwitter className='icon twitter-icon' />,
        path: 'https://www.twitter.com'
      },
    ]
  }
  render() {
    return (
      <IconWrapper>
        {
          this.state.icons.map((item) => (
            <a
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))
        }
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }

  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${transObject({})};

    &:hover {
      color: ${colors.mainYellow};
    }
  }

  .facebook-icon {
    color: #3b579d; 
  }
  .twitter-icon {
    color: #3ab7f0; 
  }
  .instagram-icon {
    color: #da5f53; 
  }
`
