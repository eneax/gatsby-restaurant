import React, { Component } from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { styles } from '../utils'


const icons = [
  {
    id: 1,
    icon: <FaFacebook className='icon facebook-icon' />,
    path: `https://www.facebook.com`,
  },
  {
    id: 2,
    icon: <FaInstagram className='icon instagram-icon' />,
    path: `https://www.instagram.com`,
  },
  {
    id: 3,
    icon: <FaTwitter className='icon twitter-icon' />,
    path: `https://www.twitter.com`,
  },
]


const Footer = () => (
  <FooterWrapper>
    <div className="title">delicious</div>
    <div className="icons">
      {icons.map(({ id, path, icon }) => (
        <a
          key={id}
          href={path}
          target='_blank'
          rel='noopener noreferrer'
        >
          {icon}
        </a>
      ))}
    </div>
    <p className="copyright">© {new Date().getFullYear()} delicious</p>
  </FooterWrapper>
)

export default Footer


const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};

  .title {
    color: ${styles.colors.mainYellow};
    text-align: center;
    width: 10rem;
    text-transform: uppercase;
    padding: .3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({
      color: `${styles.colors.mainYellow}`
    })};
  }

  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transObject({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }

  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`
