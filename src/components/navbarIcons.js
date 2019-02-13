import React from 'react'
import styled from 'styled-components'

import { colors, transObject } from '../components/styles/globalStyles'
import { icons } from '../utils/icons'


const NavbarIcons = () => (
  <IconsWrapper>
    {
      icons.map(({ id, path, icon }) => (
        <a
          key={id}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ))
    }
  </IconsWrapper>
)

export default NavbarIcons


const IconsWrapper = styled.div`
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
    color: ${colors.mainGrey};

    &:hover {
      color: ${colors.mainYellow};
    }
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
`
