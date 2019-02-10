import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

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

`