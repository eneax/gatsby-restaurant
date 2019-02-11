import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

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

  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({
      spacing: '.75rem'
    })};
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({
      spacing: '.15rem'
    })};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`


Banner.defaultProps = {
  title: 'Default Title',
  subtitle: 'Default Subtitle'
}
