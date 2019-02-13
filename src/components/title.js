import React from 'react'
import styled from 'styled-components'
import { colors, letterSpacing, textSlanted } from '../components/styles/globalStyles'

export default function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className='message'>{message}</h3>
      <h1 className='title'>{title}</h1>
      <div className="underline"></div>
    </TitleWrapper>
  )
}


const TitleWrapper = styled.div`
  text-align: center;

  .message {
    ${textSlanted};
    ${letterSpacing({ spacing: '.3rem' })};
    font-size: 2rem;
    color: ${colors.mainOrange};
  }

  .title {
    ${letterSpacing({ spacing: '.3rem' })};
    font-size: 2rem;
    text-transform: uppercase;
  }

  .underline {
    width: 5rem;
    height: .2rem;
    background: ${colors.mainOrange};
    margin: .5rem auto;
  }
`

Title.defaultProps = {
  message: 'Our message',
  title: 'Our title',
}
