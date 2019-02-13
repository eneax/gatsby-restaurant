import React from 'react'
import styled from 'styled-components'

import { icons } from '../utils/icons'
import { colors, transObject, border } from '../components/styles/globalStyles'


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
  background: ${colors.mainBlack};

  .title {
    color: ${colors.mainYellow};
    text-align: center;
    width: 10rem;
    text-transform: uppercase;
    padding: .3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${border({
      color: `${colors.mainYellow}`
    })};
  }

  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .icon {
    color: ${colors.mainWhite};
    font-size: 1.3rem;
    ${transObject({})};
  }

  .facebook-icon:hover {
    color: #3b579d; 
  }
  .twitter-icon:hover {
    color: #3ab7f0; 
  }
  .instagram-icon:hover {
    color: #da5f53; 
  }

  .copyright {
    color: ${colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
`
