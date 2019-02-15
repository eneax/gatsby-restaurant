import React from 'react'
import styled from 'styled-components'
import { colors, letterSpacing, baskerville } from '../components/styles/globalStyles'

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className='title'>{title}</h1>
      <h3 className='subtitle'>{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}


const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  a {
    text-decoration: none;
  }

  .title {
    color: ${colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${letterSpacing({
      spacing: '.75rem'
    })};
  }

  .subtitle {
    color: ${colors.mainWhite};
    ${baskerville};
    ${letterSpacing({
      spacing: '.15rem'
    })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  @media (max-width: 425px) {
    .title {
      font-size: 2.5rem;
    }
    .subtitle {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 320px) {
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
`


Banner.defaultProps = {
  title: 'Default Title',
  subtitle: 'Default Subtitle'
}
